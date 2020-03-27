import { useRef, useEffect, useState} from 'react';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const useSpeechRecognition = (props = {}) => {
    const {
        onEnd = () => {},
        onResult = () => {},
        onError = () => {}
    } = props;

    const recognition = useRef(null);
    const [listening, setListening] = useState(false);
    const supported = !!window.SpeechRecognition;

    const processResult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        onResult(transcript);
    };

    const listen = (args = {}) => {
        if (listening) return;
        const {
            lang = '', interimResults = true, continuous = false, maxAlternatives = 1, grammars
        } = args;
        
        try {
            setListening(true);
            recognition.current.lang = lang;
            recognition.current.interimResults = interimResults;
            recognition.current.onresult = processResult;
            recognition.current.onerror = (e) => onError(e);
            recognition.current.continuous = continuous;
            recognition.current.maxAlternatives = maxAlternatives;
            if (grammars) {
                recognition.current.grammars = grammars;
            }
            // SpeechRecognition stops automatically after inactivity
            // We want it to keep going until we tell it to stop
            recognition.current.onend = () => recognition.current.start();        
            recognition.current.start();
        } catch (err) {
            onError(err);
        }        
    };

    const stop = () => {
        if (!listening) return;
        recognition.current.onresult = () => {};
        recognition.current.onend = () => {};
        recognition.current.onerror = () => {};
        setListening(false);
        recognition.current.stop();
        onEnd();
    };

    useEffect(() => {
        if (!supported) return;
        recognition.current = new window.SpeechRecognition();
    }, []);

    return { listen, listening, stop, supported };
};

export default useSpeechRecognition;