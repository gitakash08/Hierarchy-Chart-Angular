export interface CustomNode {
    expanded?: boolean;
    type?: string;
    id: number;
    name: string;
    data: {
      image: string;
      images: string[];
      relationships: number[];
      title: string;
      about: string;
      Age: number;
      height: string;
      gender: string;
      bodyType: string;
      weight: string;
    };
    children: CustomNode[];
  }
