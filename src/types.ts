export enum EVENT_TYPE {
  ITEM = 'itemResize',
  SLOT = 'slotResize',
}

export enum SLOT_TYPE {
  HEADER = 'thead', // string value also use for aria role attribute
  FOOTER = 'tfoot',
}

export enum DIRECTION_TYPE {
  FRONT = 'FRONT',
  BEHIND = 'BEHIND',
}

export enum SCROLL_DIRECTION {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

export enum CALC_TYPE {
  INIT = 'INIT',
  FIXED = 'FIXED',
  DYNAMIC = 'DYNAMIC',
}

export type DataSource = {
  [key: string]: any;
  // 其它属性
};

export type Range = {
  start: number;
  end: number;
  padFront: number;
  padBehind: number;
};
