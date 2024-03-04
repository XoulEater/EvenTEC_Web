
export interface Event {
    id: string;
    title: string;
    date: string;
    description: string;
    image: string;
    organizer: string;
    capacity: number;
    schedule: string;
    rating: number;
}

export const events: Event[] = [
    {
        id: "1",
        title: "Concert",
        date: "18/10/2021",
        description: "This is event 1",
        image:
            "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?cs=srgb&dl=pexels-maur%C3%ADcio-mascaro-801863.jpg&fm=jpg",
        organizer: "Organizer 1",
        capacity: 100,
        schedule: "10:00 AM - 12:00 PM",
        rating: 4.5
    },
    {
        id: "2",
        title: "Conference",
        date: "2022-02-01",
        description: "This is event 2",
        image: "https://images.inc.com/uploaded_files/image/1920x1080/getty_499517325_111832.jpg",
        organizer: "Organizer 2",
        capacity: 50,
        schedule: "2:00 PM - 4:00 PM",
        rating: 3.8
    },
    {
        id: "3",
        title: "Workshop",
        date: "2022-03-01",
        description: "This is event 3",
        image: "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?cs=srgb&dl=pexels-ron-lach-1181357.jpg&fm=jpg",
        organizer: "Organizer 3",
        capacity: 200,
        schedule: "6:00 PM - 8:00 PM",
        rating: 4.0
    }


];

