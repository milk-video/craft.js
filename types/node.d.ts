import { HTMLProps } from "react";
import { id } from "~types";
import React from "react"
import { DOMInfo, CSSMarginPaddingObj } from "./dom";
import { BuilderContextState, CraftAPIContext } from "./core";

export type NodeId = string;


export interface NodeElementProps {
  node: Node
}


interface NodeElementState {
  childCanvas: CanvasMapping
}


export interface NodeContextState {
  node: Node;
  builder: CraftAPIContext;
  nodeState: any
}

export interface NodeCanvasContextState extends NodeContextState {
  pushChildCanvas: Function;
  childCanvas: CanvasMapping;
}

export interface ReactElement {
  type?: string | React.ElementType;
  props?: HTMLProps<any>;
}

export interface ComponentType  {
  editor?: Function
}

export interface NodeState {
  editor?: Function
  dragging?: MouseEvent
  hover?: MouseEvent
  active?: boolean
}

export type CraftComponent = React.ElementType & {
  editor: React.ComponentType<any>
};

export interface Node {
  type?: React.ElementType | CraftComponent
  name?: string;
  editor?: Function;
  props?: HTMLProps<any>;
  id?: NodeId;
  info?: DOMInfo;
  childCanvas?: CanvasMapping;
  parent?: NodeId;
  closestParent?: NodeId;
}

export interface TreeNode extends Node {
  children: TreeNodes
}

export interface TreeNodes {
  [key: string]: TreeNode
}

export interface CanvasMapping {
  [key: string]: NodeId;
}

export interface CanvasNode extends Node {
  nodes?: NodeId[]
  incoming?: Function;
  outgoing?: Function;
}

export interface Nodes {
  [key: string]: Node
}

export interface NodeStates {
  [key: string]: NodeState
}

export interface CanvasNodes {
  [key: string]: CanvasNode
}

export interface NodeInfo extends DOMInfo {
  id?: id;
}
