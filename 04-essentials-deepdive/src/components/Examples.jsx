import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import React from "react";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = React.useState();

    function handleSelect(selectedButton) {
        //selectedButton => string values
        console.log(selectedButton);
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-contents">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section title={Examples} id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </menu>
            {tabContent}
        </Section>
    );

}