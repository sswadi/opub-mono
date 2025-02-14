import React from 'react';
import type { DestructableAction, DisableableAction } from './button';

export interface ActionListItemDescriptor
  extends DisableableAction,
    DestructableAction {
  /** Visually hidden text for screen readers */
  accessibilityLabel?: string;
  /** Additional hint text to display with item */
  helpText?: React.ReactNode;
  /** Source of the icon */
  icon?: React.ReactNode;
  /** Prefix source */
  prefix?: React.ReactNode;
  /** Suffix source */
  suffix?: React.ReactNode;
  /**  Add an ellipsis suffix to action content */
  ellipsis?: boolean;
  /** Whether the action is active or not */
  active?: boolean;
  /** Defines a role for the action */
  role?: string;
}

export interface ActionListSection {
  /** Section title */
  title?: string;
  /** Collection of action items for the list */
  items: readonly ActionListItemDescriptor[];
}
