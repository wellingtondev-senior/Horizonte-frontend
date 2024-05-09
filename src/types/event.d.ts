export interface Event {
    title: string;
    start: string;
    end: string;
    groupId: string;
    backgroundColor: string;
    borderColor: string;
    extendedProps: {
        department: string;
        description: string;
        cliente: string;

    };
}

export interface Eventos {
    events: Event[];
}