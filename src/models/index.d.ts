import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HikeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Hike {
  readonly id: string;
  readonly name?: string | null;
  readonly difficulty?: string | null;
  readonly location?: string | null;
  readonly lat?: number | null;
  readonly long?: number | null;
  readonly length?: number | null;
  readonly time?: string | null;
  readonly coverImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Hike, HikeMetaData>);
  static copyOf(source: Hike, mutator: (draft: MutableModel<Hike, HikeMetaData>) => MutableModel<Hike, HikeMetaData> | void): Hike;
}