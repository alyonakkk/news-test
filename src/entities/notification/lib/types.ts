export interface INotification {
    id: number;
    message: string;
    status: "info" | "success" | "error";
}
