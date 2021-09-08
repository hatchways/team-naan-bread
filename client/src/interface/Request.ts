export interface RequestData {
  _id: string;
  accepted: boolean;
  declined: boolean;
  paid: boolean;
  userId: string;
  sitterId: string;
  start: Date;
  end: Date;
  offset: number;
}
