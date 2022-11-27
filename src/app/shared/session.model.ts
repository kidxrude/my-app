export interface Session {
    id: number,
    name: string,
    date: Date,
    comments?: string,
    distance: number,
    average: number,
    gpxData: string
}