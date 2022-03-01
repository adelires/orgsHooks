import { useState, useEffect } from "react";

import { loadProducers } from "../services/loadData";

export default function useProducers() {

    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const producers = loadProducers();
        producers.list.sort(
            (producer1, producer2) => producer1.distance - producer2.distance,
        );
        setTitle(producers.title);
        setList(producers.list);
    }, []);

    return [title, list];
}