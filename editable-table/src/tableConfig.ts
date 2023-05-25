export enum TableType {
  table1 = 'table1',
  // table2 = 'table2',
  // table3 = 'table3',
}

interface TableHeader {
  id: string;
  title: string;
  width?: string;
}

type TableColumnSuggestion = {
  [key in string]: Option[];
};

interface TableColumn {
  order: number;
  id: string;
  suggestions?: TableColumnSuggestion;
}

interface TableRow {
  id: string;
  value?: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface TableContent {
  headers: TableHeader[];
  columns: TableColumn[];
  rows: TableRow[][];
}

const table1: TableContent = {
  headers: [
    { id: 'count', title: '', width: '10%' },
    { id: 'branch', title: 'Branch', width: '40%' },
    { id: 'main_product', title: 'Main Product' },
    { id: 'remove', title: '', width: '2%' },
  ],
  columns: [
    { order: 0, id: 'count' },
    {
      order: 1,
      id: 'branch',
      suggestions: {
        default: [
          { value: '0', label: 'Miami' },
          { value: '1', label: 'Orlando' },
          { value: '2', label: 'Tampa' },
          // { value: '3', label: 'Abdomen' },
          // { value: '4', label: 'Extremities' },
          // { value: '5', label: 'Eyes' },
          // { value: '6', label: 'Nose' },
          // { value: '7', label: 'Breast' },
          // { value: '8', label: 'Tonsils' },
          // { value: '9', label: 'Arms' },
        ],
      },
    },
    {
      order: 2,
      id: 'main_product',
      suggestions: {
        Miami: [
          { value: '0', label: 'Banana' },
          { value: '1', label: 'Apple' },
          { value: '2', label: 'Orange' },
        ],
        Orlando: [
          { value: '0', label: 'Grapefruit' },
          { value: '1', label: 'Banana' },
          { value: '2', label: 'Tomoto' },
        ],
        Tampa: [
          { value: '0', label: 'Kiwi' },
          { value: '1', label: 'Potato' },
          { value: '2', label: 'Strawberry' },

        ],
      },
    },
    { order: 3, id: 'remove' },
  ],
  rows: [
    [
      { id: 'count' },
      { id: 'branch', value: 'Miami' },
      { id: 'main_product', value: '' },
      { id: 'remove' },
    ],
    [
      { id: 'count' },
      { id: 'branch', value: '' },
      { id: 'main_product', value: '' },
      { id: 'remove' },
    ],
    [
      { id: 'count' },
      { id: 'branch', value: '' },
      { id: 'main_product', value: '' },
      { id: 'remove' },
    ],
  ],
};

type TableListType = { [key in TableType]: TableContent };

export const TableList: TableListType = {
  table1: table1,
  // table2: table2,
  // table3: table3,
};
