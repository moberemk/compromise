/** Declaration file generated by dts-gen */

declare function compromise(str: string, lexicon: any): any;
declare namespace nlp {
  const version: string;
  function verbose(str: any): void;
  function tokenize(str: string): any;
  function plugin(obj: any): any;
  function clone(): any;
 }
export = nlp;