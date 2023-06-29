export interface UserData {
    id: number;
    avatar: string;
    fullName: string;
    age: number;
    sex: string;
    location: {
        country: string;
        city: string;
    };
}