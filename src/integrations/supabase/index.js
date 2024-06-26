import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/* Supabase integration types

// Table: event_signups
// Columns:
// - id: string (uuid)
// - event_id: number (bigint)
// - name: string (text)
// - email: string (text)
// - created_at: string (timestamp without time zone)

// Table: events
// Columns:
// - id: number (bigint)
// - created_at: string (timestamp with time zone)
// - name: string (text)
// - date: string (date)
// - description: string (text)
// - venue_id: number (bigint)
// - is_pinned: boolean
// - image_url: string (text)
// - pdf_url: string (text)
// - latitude: number (double precision)
// - longitude: number (double precision)

// Table: comments
// Columns:
// - id: number (bigint)
// - created_at: string (timestamp with time zone)
// - content: string (text)
// - event_id: number (bigint)

// Table: venues
// Columns:
// - id: number (bigint)
// - name: string (text)
// - location: string (text)
// - description: string (text)
// - created_at: string (timestamp with time zone)
// - updated_at: string (timestamp with time zone)
*/

// Hooks for event_signups
export const useEventSignups = () => useQuery({
    queryKey: ['event_signups'],
    queryFn: () => fromSupabase(supabase.from('event_signups').select('*')),
});
export const useAddEventSignup = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newSignup) => fromSupabase(supabase.from('event_signups').insert([newSignup])),
        onSuccess: () => {
            queryClient.invalidateQueries('event_signups');
        },
    });
};

// Hooks for events
export const useEvents = () => useQuery({
    queryKey: ['events'],
    queryFn: () => fromSupabase(supabase.from('events').select('*')),
});
export const useAddEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newEvent) => fromSupabase(supabase.from('events').insert([newEvent])),
        onSuccess: () => {
            queryClient.invalidateQueries('events');
        },
    });
};

// Hooks for comments
export const useComments = () => useQuery({
    queryKey: ['comments'],
    queryFn: () => fromSupabase(supabase.from('comments').select('*')),
});
export const useAddComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newComment) => fromSupabase(supabase.from('comments').insert([newComment])),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};

// Hooks for venues
export const useVenues = () => useQuery({
    queryKey: ['venues'],
    queryFn: () => fromSupabase(supabase.from('venues').select('*')),
});
export const useAddVenue = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newVenue) => fromSupabase(supabase.from('venues').insert([newVenue])),
        onSuccess: () => {
            queryClient.invalidateQueries('venues');
        },
    });
};