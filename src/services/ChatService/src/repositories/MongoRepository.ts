import { GenericRepository } from "./GenericRepository";

/**
 * MongoRepository contains the business logic for communicating
 * with mongoose - a js library for MongoDB.
 * 
 * The generic T is in this implementation always a mongoose entity.
 */
export class MongoRepository<T> implements GenericRepository<T> {
    /**
     * 
     * @param entity any
     */
    public save(entity: T): void {
    }
}