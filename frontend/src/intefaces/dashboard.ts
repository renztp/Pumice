export interface recentNotes {
  id: string;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardState {
  recentNotes: recentNotes[];
  history: recentNotes[];
  loading: boolean;
  error: string | null;
}
