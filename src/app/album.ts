import { Track } from "./track";

export interface Album {
    name: string;
    releaseDate: string;
    coverageImage: string;
    tracks: Track[];
}
