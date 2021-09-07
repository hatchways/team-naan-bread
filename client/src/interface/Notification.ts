export interface Notification {
  notificationType: string;
  title: string;
  description?: string;
  read: boolean;
  userId: string;
  createdAt: string;
}
