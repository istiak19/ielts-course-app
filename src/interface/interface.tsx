/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SectionProps {
    sections: any[];
};

interface ChecklistItem {
    id: string;
    text: string;
    icon: string;
    color: string;
};

export interface ChecklistProps {
    items: ChecklistItem[];
};

export interface MediaItem {
    resource_type: string;
    resource_value: string;
    thumbnail_url?: string;
};