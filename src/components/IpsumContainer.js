import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { generateText } from './generateText/generateText';
import { Stack } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function IpsumContainer(props) {

    const [paragraphs, setParagraphs] = useState(props.paragraphs);
    const [minSentences, setMinSentences] = useState(props.minSentences);
    const [maxSentences, setMaxSentences] = useState(props.maxSentences);
    const [text, setText] = useState(props.text);

    // Function to generate text and set the text state
    function updateText() {
        setText(generateText(paragraphs, minSentences, maxSentences));
    }

    // Whenever any of the setting states change, update the text
    React.useEffect(() => {
        updateText();
    }, [paragraphs, minSentences, maxSentences]);

    // Functions to change the setting states depending on which button is clicked
    function incrementParagraphs() {
        if (paragraphs < 10) {
            setParagraphs(paragraphs + 1);
        }
    }

    function decrementParagraphs() {
        if (paragraphs > 1) {
            setParagraphs(paragraphs - 1);
        }
    }

    function incrementMinSentences() {
        if (minSentences < 10 && minSentences < maxSentences) {
            setMinSentences(minSentences + 1);
        }
    }

    function decrementMinSentences() {
        if (minSentences > 1) {
            setMinSentences(minSentences - 1);
        }
    }

    function incrementMaxSentences() {
        if (maxSentences < 10) {
            setMaxSentences(maxSentences + 1);
        }
    }

    function decrementMaxSentences() {
        if (maxSentences > minSentences) {
            setMaxSentences(maxSentences - 1);
        }
    }

    // Convert the text object to a string and put it in the clipboard
    function copyToClipboard() {
        var rawText = ""
        for (let i = 0; i < text.length; i++) {
            rawText += text[i] + "\n\n";
        }
        navigator.clipboard.writeText(rawText)
    }

    return (
        <div className="p-3 mb-2 bg-body">
            <Stack gap={3}>
                <div>
                    <h1>Generate placeholder text</h1>
                    <Row>
                        <Col md="auto">
                            Give us {paragraphs}
                        </Col>
                        <Col md="auto">
                            <ButtonGroup>
                                <Button variant="primary" size="sm" onClick={incrementParagraphs}>+</Button>
                                <Button variant="primary" size="sm" onClick={decrementParagraphs}>-</Button>
                            </ButtonGroup>
                        </Col>
                        <Col md="auto">
                            paragraphs with {minSentences}
                        </Col>
                        <Col md="auto">
                            <ButtonGroup>
                                <Button variant="secondary" size="sm" onClick={incrementMinSentences}>+</Button>
                                <Button variant="secondary" size="sm" onClick={decrementMinSentences}>-</Button>
                            </ButtonGroup>
                        </Col>
                        <Col md="auto">
                            to {maxSentences}
                        </Col>
                        <Col md="auto">
                            <ButtonGroup>
                                <Button variant="secondary" size="sm" onClick={incrementMaxSentences}>+</Button>
                                <Button variant="secondary" size="sm" onClick={decrementMaxSentences}>-</Button>
                            </ButtonGroup>
                        </Col>
                        <Col md="auto">
                            sentences each.
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col md="auto">
                            <Button variant="success" onClick={copyToClipboard}>Copy to clipboard</Button>
                        </Col>
                        <Col md="auto">
                            <Button varient="success" onClick={updateText}>Regenerate</Button>
                        </Col>
                    </Row>
                </div>
                <div className="p-3 mb-2 bg-dark text-white">
                    {text.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
                </div>
            </Stack>
        </div>
    )
}