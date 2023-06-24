/**
 * props declaration for default, item and slot component
 */

import { PropType, Component } from 'vue';
type VueComponent = Component;
export const VirtualProps = {
  dataKey: {
    type: [String, Function],
    required: true,
  },
  dataSources: {
    type: Array,
    required: true,
    default: (): Array<any> => [],
  },
  dataComponent: {
    type: [Object, Function],
    required: true,
  },

  keeps: {
    type: Number,
    default: 30,
  },
  extraProps: {
    type: Object,
  },
  estimateSize: {
    type: Number,
    default: 50,
  },

  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'vertical', // the other value is horizontal
  },
  start: {
    type: Number,
    default: 0,
  },
  offset: {
    type: Number,
    default: 0,
  },
  topThreshold: {
    type: Number,
    default: 0,
  },
  bottomThreshold: {
    type: Number,
    default: 0,
  },
  pageMode: {
    type: Boolean,
    default: false,
  },
  rootTag: {
    type: String,
    default: 'div',
  },
  wrapTag: {
    type: String,
    default: 'div',
  },
  wrapClass: {
    type: String,
    default: 'wrap',
  },
  wrapStyle: {
    type: Object,
  },
  itemTag: {
    type: String,
    default: 'div',
  },
  itemClass: {
    type: String,
    default: '',
  },
  itemClassAdd: {
    type: Function,
  },
  itemStyle: {
    type: Object,
  },
  headerTag: {
    type: String,
    default: 'div',
  },
  headerClass: {
    type: String,
    default: '',
  },
  headerStyle: {
    type: Object,
  },
  footerTag: {
    type: String,
    default: 'div',
  },
  footerClass: {
    type: String,
    default: '',
  },
  footerStyle: {
    type: Object,
  },
  itemScopedSlots: {
    type: Object,
  },
};

export const ItemProps = {
  index: {
    type: Number,
  },
  event: {
    type: String,
  },
  tag: {
    type: String as PropType<string>,
    default: 'div',
  },
  horizontal: {
    type: Boolean,
  },
  source: {
    type: Object,
  },
  component: {
    type: [Object, Function] as PropType<
      VueComponent | ((props: any) => JSX.Element) | null
    >,
    // type: [Object, Function] as PropType<{ (): JSX.Element  }>,
    default: null,
  },
  uniqueKey: {
    type: [String, Number],
  },
  extraProps: {
    type: Object,
  },
  scopedSlots: {
    type: Object,
  },
};

export interface ItemPropsInterface {
  index?: number;
  event?: string;
  tag?: string;
  horizontal?: boolean;
  source?: Record<string, any>;
  component?: VueComponent | ((props: any) => JSX.Element) | null;
  uniqueKey?: string | number;
  extraProps?: Record<string, any>;
  scopedSlots?: Record<string, any>;
}

// interface SlotProps {
//   tag: string;
//   uniqueKey: string;
// }

export const SlotProps = {
  event: {
    type: String,
  },
  uniqueKey: {
    type: String as PropType<string>,
    required: true,
  },
  tag: {
    type: String as PropType<string>,
    default: 'div',
  },
  horizontal: {
    type: Boolean,
  },
};
