// tslint:disable: no-unsafe-any
import { IValueStoreSync } from "@veestore/veestore";
// @ts-ignore
// tslint:disable-next-line: no-submodule-imports
import SortedSet from "collections/sorted-set";

export class StoreSync<T> implements IValueStoreSync<T> {
	private readonly store: SortedSet<T> = new SortedSet<T>();

	public all(): T[] {
		return this.store.toArray();
	}

	public put(value: T): boolean {
		this.store.add(value);

		return this.has(value);
	}

	public putMany(values: T[]): boolean[] {
		return values.map((value: T) => this.put(value));
	}

	public has(value: T): boolean {
		return this.store.has(value);
	}

	public hasMany(values: T[]): boolean[] {
		return values.map((value: T) => this.has(value));
	}

	public missing(value: T): boolean {
		return !this.has(value);
	}

	public missingMany(values: T[]): boolean[] {
		return values.map((value: T) => this.missing(value));
	}

	public forget(value: T): boolean {
		return this.store.delete(value);
	}

	public forgetMany(values: T[]): boolean[] {
		return values.map((value: T) => this.forget(value));
	}

	public flush(): boolean {
		this.store.clear();

		return this.count() === 0;
	}

	public count(): number {
		return this.store.length;
	}
}
