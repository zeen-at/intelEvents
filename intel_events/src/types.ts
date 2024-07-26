export interface IRegister {
  name: string;
  email: string;
  password: string;
}
export interface ILogin {
  email: string;
  password: string;
}

export interface Event {
  id: string;
  eventName: string;
  date: Date;
  time: Date;
  description: string;
  location: string;
}

export interface EventPayload {
  eventName: string;
  date: Date;
  time: Date;
  description: string;
  location: string;
}
