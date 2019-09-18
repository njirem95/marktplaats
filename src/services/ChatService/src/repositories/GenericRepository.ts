export interface GenericRepository<T> {
    save(entity: T): void;
}