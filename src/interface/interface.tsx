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