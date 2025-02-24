import { User, Session } from "@supabase/supabase-js";

export interface AuthContextType {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
}

export interface LocationState {
  from?: {
    pathname: string;
  };
}
