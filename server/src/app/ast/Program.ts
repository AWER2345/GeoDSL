import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import DefinitionBlock from './DefinitionBlock';
import OutputBlock from './OutputBlock';
import { Range } from '../util/Range';
import CanvasConfiguration from './CanvasConfiguration';
export default class Program extends ASTNode {
  readonly canvasConfiguration?: CanvasConfiguration;
  readonly definitionBlock?: DefinitionBlock;
  readonly outputBlock: OutputBlock;

  constructor(range: Range, outputBlock: OutputBlock, canvasConfiguration?: CanvasConfiguration, definitionBlock?: DefinitionBlock) {
    super(range);
    this.canvasConfiguration = canvasConfiguration;
    this.definitionBlock = definitionBlock;
    this.outputBlock = outputBlock;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    return v.visitProgram(this, t);
  }
}
