import React, { useContext } from 'react';
import MemoriesContent from '../component/MemoriesContent';
import MemoriesContext from '../data/memories-context';

const GoodMemories: React.FC = () => {

    const memoriesCtx = useContext(MemoriesContext);

    const goodMemories = memoriesCtx.memories.filter(memory => memory.type === 'good');

    return (

        <MemoriesContent
            title="Good Memories"
            fallbackText="No good memories found."
            memories={goodMemories}
        />
    )

}

export default GoodMemories;