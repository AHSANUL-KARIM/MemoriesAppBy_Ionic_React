import React, { useContext } from 'react';
import MemoriesContent from '../component/MemoriesContent';
import MemoriesContext from '../data/memories-context';

const BadMemories: React.FC = () => {

    const memoriesCtx = useContext(MemoriesContext);

    const badMemories = memoriesCtx.memories.filter(memory => memory.type === 'bad');


    return (
        <MemoriesContent
            title="Bad Memories"
            fallbackText="No bad memories found."
            memories={badMemories}
        />
    );
};

export default BadMemories;