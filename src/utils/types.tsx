// types.ts
export interface Tracks {
  artists: Array<any>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
