export interface Notification {
  notificationType: string;
  title: string;
  description?: string;
  read: boolean;
  createdAt: string;
  _id: string;
  context?: NotificationContext;
}

interface NotificationContext {
  profilePhotoURL?: string;
  rating?: number;
}
