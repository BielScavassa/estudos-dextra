const EventComponent: React.FC = () => {
    const onChange = (elementEvent: React.ChangeEvent<HTMLInputElement>) => {
        console.log(elementEvent);
    };

    const ondragstart = (elementEvent: React.DragEvent<HTMLDivElement>) => {
        console.log(elementEvent);
    };

    return (
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={ondragstart}>Drag Me!</div>
        </div>
    );
};

export default EventComponent;