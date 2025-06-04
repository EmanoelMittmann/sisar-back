
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model PublicSchedule
 * 
 */
export type PublicSchedule = $Result.DefaultSelection<Prisma.$PublicSchedulePayload>
/**
 * Model UserPlans
 * 
 */
export type UserPlans = $Result.DefaultSelection<Prisma.$UserPlansPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Recurrent: {
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type Recurrent = (typeof Recurrent)[keyof typeof Recurrent]


export const StatusSchedules: {
  PENDING: 'PENDING',
  FINISH: 'FINISH',
  NOT_PAY: 'NOT_PAY',
  CANCELED: 'CANCELED'
};

export type StatusSchedules = (typeof StatusSchedules)[keyof typeof StatusSchedules]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Recurrent = $Enums.Recurrent

export const Recurrent: typeof $Enums.Recurrent

export type StatusSchedules = $Enums.StatusSchedules

export const StatusSchedules: typeof $Enums.StatusSchedules

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicSchedule`: Exposes CRUD operations for the **PublicSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicSchedules
    * const publicSchedules = await prisma.publicSchedule.findMany()
    * ```
    */
  get publicSchedule(): Prisma.PublicScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPlans`: Exposes CRUD operations for the **UserPlans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPlans
    * const userPlans = await prisma.userPlans.findMany()
    * ```
    */
  get userPlans(): Prisma.UserPlansDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Organization: 'Organization',
    Service: 'Service',
    Plan: 'Plan',
    Schedule: 'Schedule',
    PublicSchedule: 'PublicSchedule',
    UserPlans: 'UserPlans'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "organization" | "service" | "plan" | "schedule" | "publicSchedule" | "userPlans"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      PublicSchedule: {
        payload: Prisma.$PublicSchedulePayload<ExtArgs>
        fields: Prisma.PublicScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSchedulePayload>
          }
          findFirst: {
            args: Prisma.PublicScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSchedulePayload>
          }
          findMany: {
            args: Prisma.PublicScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSchedulePayload>[]
          }
          create: {
            args: Prisma.PublicScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSchedulePayload>
          }
          createMany: {
            args: Prisma.PublicScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSchedulePayload>[]
          }
          delete: {
            args: Prisma.PublicScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSchedulePayload>
          }
          update: {
            args: Prisma.PublicScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSchedulePayload>
          }
          deleteMany: {
            args: Prisma.PublicScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSchedulePayload>[]
          }
          upsert: {
            args: Prisma.PublicScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicSchedulePayload>
          }
          aggregate: {
            args: Prisma.PublicScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicSchedule>
          }
          groupBy: {
            args: Prisma.PublicScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<PublicScheduleCountAggregateOutputType> | number
          }
        }
      }
      UserPlans: {
        payload: Prisma.$UserPlansPayload<ExtArgs>
        fields: Prisma.UserPlansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPlansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPlansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlansPayload>
          }
          findFirst: {
            args: Prisma.UserPlansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPlansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlansPayload>
          }
          findMany: {
            args: Prisma.UserPlansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlansPayload>[]
          }
          create: {
            args: Prisma.UserPlansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlansPayload>
          }
          createMany: {
            args: Prisma.UserPlansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPlansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlansPayload>[]
          }
          delete: {
            args: Prisma.UserPlansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlansPayload>
          }
          update: {
            args: Prisma.UserPlansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlansPayload>
          }
          deleteMany: {
            args: Prisma.UserPlansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPlansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPlansUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlansPayload>[]
          }
          upsert: {
            args: Prisma.UserPlansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlansPayload>
          }
          aggregate: {
            args: Prisma.UserPlansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPlans>
          }
          groupBy: {
            args: Prisma.UserPlansGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPlansGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPlansCountArgs<ExtArgs>
            result: $Utils.Optional<UserPlansCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    organization?: OrganizationOmit
    service?: ServiceOmit
    plan?: PlanOmit
    schedule?: ScheduleOmit
    publicSchedule?: PublicScheduleOmit
    userPlans?: UserPlansOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    schedules: number
    UserPlans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | UserCountOutputTypeCountSchedulesArgs
    UserPlans?: boolean | UserCountOutputTypeCountUserPlansArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlansWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    services: number
    plans: number
    schedules: number
    PublicSchedule: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | OrganizationCountOutputTypeCountServicesArgs
    plans?: boolean | OrganizationCountOutputTypeCountPlansArgs
    schedules?: boolean | OrganizationCountOutputTypeCountSchedulesArgs
    PublicSchedule?: boolean | OrganizationCountOutputTypeCountPublicScheduleArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPublicScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicScheduleWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    schedules: number
    PublicSchedule: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | ServiceCountOutputTypeCountSchedulesArgs
    PublicSchedule?: boolean | ServiceCountOutputTypeCountPublicScheduleArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountPublicScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicScheduleWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    UserPlans: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPlans?: boolean | PlanCountOutputTypeCountUserPlansArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountUserPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlansWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    email: string | null
    phone: string | null
    cpf: string | null
    role: $Enums.Role | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    email: string | null
    phone: string | null
    cpf: string | null
    role: $Enums.Role | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    email: number
    phone: number
    cpf: number
    role: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    phone?: true
    cpf?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    phone?: true
    cpf?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    phone?: true
    cpf?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    uuid: string
    name: string
    email: string
    phone: string
    cpf: string
    role: $Enums.Role
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Organization?: boolean | User$OrganizationArgs<ExtArgs>
    schedules?: boolean | User$schedulesArgs<ExtArgs>
    UserPlans?: boolean | User$UserPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "email" | "phone" | "cpf" | "role" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | User$OrganizationArgs<ExtArgs>
    schedules?: boolean | User$schedulesArgs<ExtArgs>
    UserPlans?: boolean | User$UserPlansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Organization: Prisma.$OrganizationPayload<ExtArgs> | null
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
      UserPlans: Prisma.$UserPlansPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      name: string
      email: string
      phone: string
      cpf: string
      role: $Enums.Role
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organization<T extends User$OrganizationArgs<ExtArgs> = {}>(args?: Subset<T, User$OrganizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    schedules<T extends User$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, User$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserPlans<T extends User$UserPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$UserPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly uuid: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Organization
   */
  export type User$OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * User.schedules
   */
  export type User$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * User.UserPlans
   */
  export type User$UserPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
    where?: UserPlansWhereInput
    orderBy?: UserPlansOrderByWithRelationInput | UserPlansOrderByWithRelationInput[]
    cursor?: UserPlansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPlansScalarFieldEnum | UserPlansScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    social_name: string | null
    fantasy_name: string | null
    cnpj: string | null
    email: string | null
    phone: string | null
    is_active: boolean | null
    office: string | null
    image_path: string | null
    createdAt: Date | null
    updatedAt: Date | null
    inactiveAt: Date | null
    userId: number | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    social_name: string | null
    fantasy_name: string | null
    cnpj: string | null
    email: string | null
    phone: string | null
    is_active: boolean | null
    office: string | null
    image_path: string | null
    createdAt: Date | null
    updatedAt: Date | null
    inactiveAt: Date | null
    userId: number | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    uuid: number
    social_name: number
    fantasy_name: number
    cnpj: number
    email: number
    phone: number
    is_active: number
    office: number
    image_path: number
    createdAt: number
    updatedAt: number
    inactiveAt: number
    userId: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    uuid?: true
    social_name?: true
    fantasy_name?: true
    cnpj?: true
    email?: true
    phone?: true
    is_active?: true
    office?: true
    image_path?: true
    createdAt?: true
    updatedAt?: true
    inactiveAt?: true
    userId?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    uuid?: true
    social_name?: true
    fantasy_name?: true
    cnpj?: true
    email?: true
    phone?: true
    is_active?: true
    office?: true
    image_path?: true
    createdAt?: true
    updatedAt?: true
    inactiveAt?: true
    userId?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    uuid?: true
    social_name?: true
    fantasy_name?: true
    cnpj?: true
    email?: true
    phone?: true
    is_active?: true
    office?: true
    image_path?: true
    createdAt?: true
    updatedAt?: true
    inactiveAt?: true
    userId?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    uuid: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active: boolean
    office: string
    image_path: string | null
    createdAt: Date
    updatedAt: Date
    inactiveAt: Date | null
    userId: number
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    social_name?: boolean
    fantasy_name?: boolean
    cnpj?: boolean
    email?: boolean
    phone?: boolean
    is_active?: boolean
    office?: boolean
    image_path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inactiveAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    services?: boolean | Organization$servicesArgs<ExtArgs>
    plans?: boolean | Organization$plansArgs<ExtArgs>
    schedules?: boolean | Organization$schedulesArgs<ExtArgs>
    PublicSchedule?: boolean | Organization$PublicScheduleArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    social_name?: boolean
    fantasy_name?: boolean
    cnpj?: boolean
    email?: boolean
    phone?: boolean
    is_active?: boolean
    office?: boolean
    image_path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inactiveAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    social_name?: boolean
    fantasy_name?: boolean
    cnpj?: boolean
    email?: boolean
    phone?: boolean
    is_active?: boolean
    office?: boolean
    image_path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inactiveAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    uuid?: boolean
    social_name?: boolean
    fantasy_name?: boolean
    cnpj?: boolean
    email?: boolean
    phone?: boolean
    is_active?: boolean
    office?: boolean
    image_path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inactiveAt?: boolean
    userId?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "social_name" | "fantasy_name" | "cnpj" | "email" | "phone" | "is_active" | "office" | "image_path" | "createdAt" | "updatedAt" | "inactiveAt" | "userId", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    services?: boolean | Organization$servicesArgs<ExtArgs>
    plans?: boolean | Organization$plansArgs<ExtArgs>
    schedules?: boolean | Organization$schedulesArgs<ExtArgs>
    PublicSchedule?: boolean | Organization$PublicScheduleArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      services: Prisma.$ServicePayload<ExtArgs>[]
      plans: Prisma.$PlanPayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
      PublicSchedule: Prisma.$PublicSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      social_name: string
      fantasy_name: string
      cnpj: string
      email: string
      phone: string
      is_active: boolean
      office: string
      image_path: string | null
      createdAt: Date
      updatedAt: Date
      inactiveAt: Date | null
      userId: number
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    services<T extends Organization$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plans<T extends Organization$plansArgs<ExtArgs> = {}>(args?: Subset<T, Organization$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Organization$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PublicSchedule<T extends Organization$PublicScheduleArgs<ExtArgs> = {}>(args?: Subset<T, Organization$PublicScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly uuid: FieldRef<"Organization", 'String'>
    readonly social_name: FieldRef<"Organization", 'String'>
    readonly fantasy_name: FieldRef<"Organization", 'String'>
    readonly cnpj: FieldRef<"Organization", 'String'>
    readonly email: FieldRef<"Organization", 'String'>
    readonly phone: FieldRef<"Organization", 'String'>
    readonly is_active: FieldRef<"Organization", 'Boolean'>
    readonly office: FieldRef<"Organization", 'String'>
    readonly image_path: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
    readonly inactiveAt: FieldRef<"Organization", 'DateTime'>
    readonly userId: FieldRef<"Organization", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.services
   */
  export type Organization$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Organization.plans
   */
  export type Organization$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Organization.schedules
   */
  export type Organization$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Organization.PublicSchedule
   */
  export type Organization$PublicScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
    where?: PublicScheduleWhereInput
    orderBy?: PublicScheduleOrderByWithRelationInput | PublicScheduleOrderByWithRelationInput[]
    cursor?: PublicScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicScheduleScalarFieldEnum | PublicScheduleScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    price: number | null
    limit_for_day: number | null
    organizationId: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    price: number | null
    limit_for_day: number | null
    organizationId: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    price: number | null
    is_active: boolean | null
    duration: string | null
    is_quantitative: boolean | null
    limit_for_day: number | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: number | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    price: number | null
    is_active: boolean | null
    duration: string | null
    is_quantitative: boolean | null
    limit_for_day: number | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: number | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    price: number
    is_active: number
    duration: number
    is_quantitative: number
    limit_for_day: number
    createdAt: number
    updatedAt: number
    organizationId: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    price?: true
    limit_for_day?: true
    organizationId?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    price?: true
    limit_for_day?: true
    organizationId?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    price?: true
    is_active?: true
    duration?: true
    is_quantitative?: true
    limit_for_day?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    price?: true
    is_active?: true
    duration?: true
    is_quantitative?: true
    limit_for_day?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    price?: true
    is_active?: true
    duration?: true
    is_quantitative?: true
    limit_for_day?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    uuid: string
    name: string
    price: number
    is_active: boolean
    duration: string
    is_quantitative: boolean
    limit_for_day: number | null
    createdAt: Date
    updatedAt: Date
    organizationId: number
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    price?: boolean
    is_active?: boolean
    duration?: boolean
    is_quantitative?: boolean
    limit_for_day?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    schedules?: boolean | Service$schedulesArgs<ExtArgs>
    PublicSchedule?: boolean | Service$PublicScheduleArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    price?: boolean
    is_active?: boolean
    duration?: boolean
    is_quantitative?: boolean
    limit_for_day?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    price?: boolean
    is_active?: boolean
    duration?: boolean
    is_quantitative?: boolean
    limit_for_day?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    price?: boolean
    is_active?: boolean
    duration?: boolean
    is_quantitative?: boolean
    limit_for_day?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "price" | "is_active" | "duration" | "is_quantitative" | "limit_for_day" | "createdAt" | "updatedAt" | "organizationId", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    schedules?: boolean | Service$schedulesArgs<ExtArgs>
    PublicSchedule?: boolean | Service$PublicScheduleArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
      PublicSchedule: Prisma.$PublicSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      name: string
      price: number
      is_active: boolean
      duration: string
      is_quantitative: boolean
      limit_for_day: number | null
      createdAt: Date
      updatedAt: Date
      organizationId: number
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends Service$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Service$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PublicSchedule<T extends Service$PublicScheduleArgs<ExtArgs> = {}>(args?: Subset<T, Service$PublicScheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly uuid: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Int'>
    readonly is_active: FieldRef<"Service", 'Boolean'>
    readonly duration: FieldRef<"Service", 'String'>
    readonly is_quantitative: FieldRef<"Service", 'Boolean'>
    readonly limit_for_day: FieldRef<"Service", 'Int'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
    readonly organizationId: FieldRef<"Service", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.schedules
   */
  export type Service$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Service.PublicSchedule
   */
  export type Service$PublicScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
    where?: PublicScheduleWhereInput
    orderBy?: PublicScheduleOrderByWithRelationInput | PublicScheduleOrderByWithRelationInput[]
    cursor?: PublicScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicScheduleScalarFieldEnum | PublicScheduleScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    id: number | null
    price: number | null
    organizationId: number | null
  }

  export type PlanSumAggregateOutputType = {
    id: number | null
    price: number | null
    organizationId: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    price: number | null
    recurrent: $Enums.Recurrent | null
    description: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: number | null
  }

  export type PlanMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    price: number | null
    recurrent: $Enums.Recurrent | null
    description: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: number | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    price: number
    recurrent: number
    description: number
    dueDate: number
    createdAt: number
    updatedAt: number
    organizationId: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    id?: true
    price?: true
    organizationId?: true
  }

  export type PlanSumAggregateInputType = {
    id?: true
    price?: true
    organizationId?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    price?: true
    recurrent?: true
    description?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    price?: true
    recurrent?: true
    description?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    price?: true
    recurrent?: true
    description?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: number
    uuid: string
    name: string
    price: number
    recurrent: $Enums.Recurrent
    description: string
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    organizationId: number
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    price?: boolean
    recurrent?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    UserPlans?: boolean | Plan$UserPlansArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    price?: boolean
    recurrent?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    price?: boolean
    recurrent?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    price?: boolean
    recurrent?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "name" | "price" | "recurrent" | "description" | "dueDate" | "createdAt" | "updatedAt" | "organizationId", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    UserPlans?: boolean | Plan$UserPlansArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      UserPlans: Prisma.$UserPlansPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      name: string
      price: number
      recurrent: $Enums.Recurrent
      description: string
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
      organizationId: number
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UserPlans<T extends Plan$UserPlansArgs<ExtArgs> = {}>(args?: Subset<T, Plan$UserPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'Int'>
    readonly uuid: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly price: FieldRef<"Plan", 'Int'>
    readonly recurrent: FieldRef<"Plan", 'Recurrent'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly dueDate: FieldRef<"Plan", 'DateTime'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
    readonly organizationId: FieldRef<"Plan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.UserPlans
   */
  export type Plan$UserPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
    where?: UserPlansWhereInput
    orderBy?: UserPlansOrderByWithRelationInput | UserPlansOrderByWithRelationInput[]
    cursor?: UserPlansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPlansScalarFieldEnum | UserPlansScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
    serviceId: number | null
    userId: number | null
    organizationId: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
    serviceId: number | null
    userId: number | null
    organizationId: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    serviceId: number | null
    userId: number | null
    organizationId: number | null
    contractAt: Date | null
    status: $Enums.StatusSchedules | null
    rememberUser: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    canceledAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    serviceId: number | null
    userId: number | null
    organizationId: number | null
    contractAt: Date | null
    status: $Enums.StatusSchedules | null
    rememberUser: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    canceledAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    uuid: number
    serviceId: number
    userId: number
    organizationId: number
    contractAt: number
    status: number
    rememberUser: number
    createdAt: number
    updatedAt: number
    canceledAt: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
    serviceId?: true
    userId?: true
    organizationId?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
    serviceId?: true
    userId?: true
    organizationId?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    uuid?: true
    serviceId?: true
    userId?: true
    organizationId?: true
    contractAt?: true
    status?: true
    rememberUser?: true
    createdAt?: true
    updatedAt?: true
    canceledAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    uuid?: true
    serviceId?: true
    userId?: true
    organizationId?: true
    contractAt?: true
    status?: true
    rememberUser?: true
    createdAt?: true
    updatedAt?: true
    canceledAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    uuid?: true
    serviceId?: true
    userId?: true
    organizationId?: true
    contractAt?: true
    status?: true
    rememberUser?: true
    createdAt?: true
    updatedAt?: true
    canceledAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    uuid: string
    serviceId: number
    userId: number
    organizationId: number
    contractAt: Date
    status: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt: Date
    updatedAt: Date
    canceledAt: Date | null
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    serviceId?: boolean
    userId?: boolean
    organizationId?: boolean
    contractAt?: boolean
    status?: boolean
    rememberUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canceledAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    serviceId?: boolean
    userId?: boolean
    organizationId?: boolean
    contractAt?: boolean
    status?: boolean
    rememberUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canceledAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    serviceId?: boolean
    userId?: boolean
    organizationId?: boolean
    contractAt?: boolean
    status?: boolean
    rememberUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canceledAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    uuid?: boolean
    serviceId?: boolean
    userId?: boolean
    organizationId?: boolean
    contractAt?: boolean
    status?: boolean
    rememberUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    canceledAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "serviceId" | "userId" | "organizationId" | "contractAt" | "status" | "rememberUser" | "createdAt" | "updatedAt" | "canceledAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      serviceId: number
      userId: number
      organizationId: number
      contractAt: Date
      status: $Enums.StatusSchedules
      rememberUser: boolean
      createdAt: Date
      updatedAt: Date
      canceledAt: Date | null
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'Int'>
    readonly uuid: FieldRef<"Schedule", 'String'>
    readonly serviceId: FieldRef<"Schedule", 'Int'>
    readonly userId: FieldRef<"Schedule", 'Int'>
    readonly organizationId: FieldRef<"Schedule", 'Int'>
    readonly contractAt: FieldRef<"Schedule", 'DateTime'>
    readonly status: FieldRef<"Schedule", 'StatusSchedules'>
    readonly rememberUser: FieldRef<"Schedule", 'Boolean'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
    readonly canceledAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model PublicSchedule
   */

  export type AggregatePublicSchedule = {
    _count: PublicScheduleCountAggregateOutputType | null
    _avg: PublicScheduleAvgAggregateOutputType | null
    _sum: PublicScheduleSumAggregateOutputType | null
    _min: PublicScheduleMinAggregateOutputType | null
    _max: PublicScheduleMaxAggregateOutputType | null
  }

  export type PublicScheduleAvgAggregateOutputType = {
    id: number | null
    serviceId: number | null
    organizationId: number | null
  }

  export type PublicScheduleSumAggregateOutputType = {
    id: number | null
    serviceId: number | null
    organizationId: number | null
  }

  export type PublicScheduleMinAggregateOutputType = {
    id: number | null
    serviceId: number | null
    contractAt: Date | null
    description: string | null
    organizationId: number | null
    status: $Enums.StatusSchedules | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicScheduleMaxAggregateOutputType = {
    id: number | null
    serviceId: number | null
    contractAt: Date | null
    description: string | null
    organizationId: number | null
    status: $Enums.StatusSchedules | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicScheduleCountAggregateOutputType = {
    id: number
    serviceId: number
    contractAt: number
    description: number
    organizationId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublicScheduleAvgAggregateInputType = {
    id?: true
    serviceId?: true
    organizationId?: true
  }

  export type PublicScheduleSumAggregateInputType = {
    id?: true
    serviceId?: true
    organizationId?: true
  }

  export type PublicScheduleMinAggregateInputType = {
    id?: true
    serviceId?: true
    contractAt?: true
    description?: true
    organizationId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicScheduleMaxAggregateInputType = {
    id?: true
    serviceId?: true
    contractAt?: true
    description?: true
    organizationId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicScheduleCountAggregateInputType = {
    id?: true
    serviceId?: true
    contractAt?: true
    description?: true
    organizationId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublicScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicSchedule to aggregate.
     */
    where?: PublicScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicSchedules to fetch.
     */
    orderBy?: PublicScheduleOrderByWithRelationInput | PublicScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicSchedules
    **/
    _count?: true | PublicScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicScheduleMaxAggregateInputType
  }

  export type GetPublicScheduleAggregateType<T extends PublicScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicSchedule[P]>
      : GetScalarType<T[P], AggregatePublicSchedule[P]>
  }




  export type PublicScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicScheduleWhereInput
    orderBy?: PublicScheduleOrderByWithAggregationInput | PublicScheduleOrderByWithAggregationInput[]
    by: PublicScheduleScalarFieldEnum[] | PublicScheduleScalarFieldEnum
    having?: PublicScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicScheduleCountAggregateInputType | true
    _avg?: PublicScheduleAvgAggregateInputType
    _sum?: PublicScheduleSumAggregateInputType
    _min?: PublicScheduleMinAggregateInputType
    _max?: PublicScheduleMaxAggregateInputType
  }

  export type PublicScheduleGroupByOutputType = {
    id: number
    serviceId: number
    contractAt: Date
    description: string
    organizationId: number
    status: $Enums.StatusSchedules
    createdAt: Date
    updatedAt: Date
    _count: PublicScheduleCountAggregateOutputType | null
    _avg: PublicScheduleAvgAggregateOutputType | null
    _sum: PublicScheduleSumAggregateOutputType | null
    _min: PublicScheduleMinAggregateOutputType | null
    _max: PublicScheduleMaxAggregateOutputType | null
  }

  type GetPublicScheduleGroupByPayload<T extends PublicScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], PublicScheduleGroupByOutputType[P]>
        }
      >
    >


  export type PublicScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    contractAt?: boolean
    description?: boolean
    organizationId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicSchedule"]>

  export type PublicScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    contractAt?: boolean
    description?: boolean
    organizationId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicSchedule"]>

  export type PublicScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    contractAt?: boolean
    description?: boolean
    organizationId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicSchedule"]>

  export type PublicScheduleSelectScalar = {
    id?: boolean
    serviceId?: boolean
    contractAt?: boolean
    description?: boolean
    organizationId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PublicScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "contractAt" | "description" | "organizationId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["publicSchedule"]>
  export type PublicScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type PublicScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type PublicScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $PublicSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicSchedule"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serviceId: number
      contractAt: Date
      description: string
      organizationId: number
      status: $Enums.StatusSchedules
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publicSchedule"]>
    composites: {}
  }

  type PublicScheduleGetPayload<S extends boolean | null | undefined | PublicScheduleDefaultArgs> = $Result.GetResult<Prisma.$PublicSchedulePayload, S>

  type PublicScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicScheduleCountAggregateInputType | true
    }

  export interface PublicScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicSchedule'], meta: { name: 'PublicSchedule' } }
    /**
     * Find zero or one PublicSchedule that matches the filter.
     * @param {PublicScheduleFindUniqueArgs} args - Arguments to find a PublicSchedule
     * @example
     * // Get one PublicSchedule
     * const publicSchedule = await prisma.publicSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicScheduleFindUniqueArgs>(args: SelectSubset<T, PublicScheduleFindUniqueArgs<ExtArgs>>): Prisma__PublicScheduleClient<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicScheduleFindUniqueOrThrowArgs} args - Arguments to find a PublicSchedule
     * @example
     * // Get one PublicSchedule
     * const publicSchedule = await prisma.publicSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicScheduleClient<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicScheduleFindFirstArgs} args - Arguments to find a PublicSchedule
     * @example
     * // Get one PublicSchedule
     * const publicSchedule = await prisma.publicSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicScheduleFindFirstArgs>(args?: SelectSubset<T, PublicScheduleFindFirstArgs<ExtArgs>>): Prisma__PublicScheduleClient<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicScheduleFindFirstOrThrowArgs} args - Arguments to find a PublicSchedule
     * @example
     * // Get one PublicSchedule
     * const publicSchedule = await prisma.publicSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicScheduleClient<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicSchedules
     * const publicSchedules = await prisma.publicSchedule.findMany()
     * 
     * // Get first 10 PublicSchedules
     * const publicSchedules = await prisma.publicSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicScheduleWithIdOnly = await prisma.publicSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicScheduleFindManyArgs>(args?: SelectSubset<T, PublicScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicSchedule.
     * @param {PublicScheduleCreateArgs} args - Arguments to create a PublicSchedule.
     * @example
     * // Create one PublicSchedule
     * const PublicSchedule = await prisma.publicSchedule.create({
     *   data: {
     *     // ... data to create a PublicSchedule
     *   }
     * })
     * 
     */
    create<T extends PublicScheduleCreateArgs>(args: SelectSubset<T, PublicScheduleCreateArgs<ExtArgs>>): Prisma__PublicScheduleClient<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicSchedules.
     * @param {PublicScheduleCreateManyArgs} args - Arguments to create many PublicSchedules.
     * @example
     * // Create many PublicSchedules
     * const publicSchedule = await prisma.publicSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicScheduleCreateManyArgs>(args?: SelectSubset<T, PublicScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicSchedules and returns the data saved in the database.
     * @param {PublicScheduleCreateManyAndReturnArgs} args - Arguments to create many PublicSchedules.
     * @example
     * // Create many PublicSchedules
     * const publicSchedule = await prisma.publicSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicSchedules and only return the `id`
     * const publicScheduleWithIdOnly = await prisma.publicSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicSchedule.
     * @param {PublicScheduleDeleteArgs} args - Arguments to delete one PublicSchedule.
     * @example
     * // Delete one PublicSchedule
     * const PublicSchedule = await prisma.publicSchedule.delete({
     *   where: {
     *     // ... filter to delete one PublicSchedule
     *   }
     * })
     * 
     */
    delete<T extends PublicScheduleDeleteArgs>(args: SelectSubset<T, PublicScheduleDeleteArgs<ExtArgs>>): Prisma__PublicScheduleClient<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicSchedule.
     * @param {PublicScheduleUpdateArgs} args - Arguments to update one PublicSchedule.
     * @example
     * // Update one PublicSchedule
     * const publicSchedule = await prisma.publicSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicScheduleUpdateArgs>(args: SelectSubset<T, PublicScheduleUpdateArgs<ExtArgs>>): Prisma__PublicScheduleClient<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicSchedules.
     * @param {PublicScheduleDeleteManyArgs} args - Arguments to filter PublicSchedules to delete.
     * @example
     * // Delete a few PublicSchedules
     * const { count } = await prisma.publicSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicScheduleDeleteManyArgs>(args?: SelectSubset<T, PublicScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicSchedules
     * const publicSchedule = await prisma.publicSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicScheduleUpdateManyArgs>(args: SelectSubset<T, PublicScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicSchedules and returns the data updated in the database.
     * @param {PublicScheduleUpdateManyAndReturnArgs} args - Arguments to update many PublicSchedules.
     * @example
     * // Update many PublicSchedules
     * const publicSchedule = await prisma.publicSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicSchedules and only return the `id`
     * const publicScheduleWithIdOnly = await prisma.publicSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicSchedule.
     * @param {PublicScheduleUpsertArgs} args - Arguments to update or create a PublicSchedule.
     * @example
     * // Update or create a PublicSchedule
     * const publicSchedule = await prisma.publicSchedule.upsert({
     *   create: {
     *     // ... data to create a PublicSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicSchedule we want to update
     *   }
     * })
     */
    upsert<T extends PublicScheduleUpsertArgs>(args: SelectSubset<T, PublicScheduleUpsertArgs<ExtArgs>>): Prisma__PublicScheduleClient<$Result.GetResult<Prisma.$PublicSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicScheduleCountArgs} args - Arguments to filter PublicSchedules to count.
     * @example
     * // Count the number of PublicSchedules
     * const count = await prisma.publicSchedule.count({
     *   where: {
     *     // ... the filter for the PublicSchedules we want to count
     *   }
     * })
    **/
    count<T extends PublicScheduleCountArgs>(
      args?: Subset<T, PublicScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicScheduleAggregateArgs>(args: Subset<T, PublicScheduleAggregateArgs>): Prisma.PrismaPromise<GetPublicScheduleAggregateType<T>>

    /**
     * Group by PublicSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicScheduleGroupByArgs['orderBy'] }
        : { orderBy?: PublicScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicSchedule model
   */
  readonly fields: PublicScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublicSchedule model
   */
  interface PublicScheduleFieldRefs {
    readonly id: FieldRef<"PublicSchedule", 'Int'>
    readonly serviceId: FieldRef<"PublicSchedule", 'Int'>
    readonly contractAt: FieldRef<"PublicSchedule", 'DateTime'>
    readonly description: FieldRef<"PublicSchedule", 'String'>
    readonly organizationId: FieldRef<"PublicSchedule", 'Int'>
    readonly status: FieldRef<"PublicSchedule", 'StatusSchedules'>
    readonly createdAt: FieldRef<"PublicSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"PublicSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublicSchedule findUnique
   */
  export type PublicScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
    /**
     * Filter, which PublicSchedule to fetch.
     */
    where: PublicScheduleWhereUniqueInput
  }

  /**
   * PublicSchedule findUniqueOrThrow
   */
  export type PublicScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
    /**
     * Filter, which PublicSchedule to fetch.
     */
    where: PublicScheduleWhereUniqueInput
  }

  /**
   * PublicSchedule findFirst
   */
  export type PublicScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
    /**
     * Filter, which PublicSchedule to fetch.
     */
    where?: PublicScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicSchedules to fetch.
     */
    orderBy?: PublicScheduleOrderByWithRelationInput | PublicScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicSchedules.
     */
    cursor?: PublicScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicSchedules.
     */
    distinct?: PublicScheduleScalarFieldEnum | PublicScheduleScalarFieldEnum[]
  }

  /**
   * PublicSchedule findFirstOrThrow
   */
  export type PublicScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
    /**
     * Filter, which PublicSchedule to fetch.
     */
    where?: PublicScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicSchedules to fetch.
     */
    orderBy?: PublicScheduleOrderByWithRelationInput | PublicScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicSchedules.
     */
    cursor?: PublicScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicSchedules.
     */
    distinct?: PublicScheduleScalarFieldEnum | PublicScheduleScalarFieldEnum[]
  }

  /**
   * PublicSchedule findMany
   */
  export type PublicScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
    /**
     * Filter, which PublicSchedules to fetch.
     */
    where?: PublicScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicSchedules to fetch.
     */
    orderBy?: PublicScheduleOrderByWithRelationInput | PublicScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicSchedules.
     */
    cursor?: PublicScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicSchedules.
     */
    skip?: number
    distinct?: PublicScheduleScalarFieldEnum | PublicScheduleScalarFieldEnum[]
  }

  /**
   * PublicSchedule create
   */
  export type PublicScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicSchedule.
     */
    data: XOR<PublicScheduleCreateInput, PublicScheduleUncheckedCreateInput>
  }

  /**
   * PublicSchedule createMany
   */
  export type PublicScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicSchedules.
     */
    data: PublicScheduleCreateManyInput | PublicScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicSchedule createManyAndReturn
   */
  export type PublicScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many PublicSchedules.
     */
    data: PublicScheduleCreateManyInput | PublicScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicSchedule update
   */
  export type PublicScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicSchedule.
     */
    data: XOR<PublicScheduleUpdateInput, PublicScheduleUncheckedUpdateInput>
    /**
     * Choose, which PublicSchedule to update.
     */
    where: PublicScheduleWhereUniqueInput
  }

  /**
   * PublicSchedule updateMany
   */
  export type PublicScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicSchedules.
     */
    data: XOR<PublicScheduleUpdateManyMutationInput, PublicScheduleUncheckedUpdateManyInput>
    /**
     * Filter which PublicSchedules to update
     */
    where?: PublicScheduleWhereInput
    /**
     * Limit how many PublicSchedules to update.
     */
    limit?: number
  }

  /**
   * PublicSchedule updateManyAndReturn
   */
  export type PublicScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * The data used to update PublicSchedules.
     */
    data: XOR<PublicScheduleUpdateManyMutationInput, PublicScheduleUncheckedUpdateManyInput>
    /**
     * Filter which PublicSchedules to update
     */
    where?: PublicScheduleWhereInput
    /**
     * Limit how many PublicSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicSchedule upsert
   */
  export type PublicScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicSchedule to update in case it exists.
     */
    where: PublicScheduleWhereUniqueInput
    /**
     * In case the PublicSchedule found by the `where` argument doesn't exist, create a new PublicSchedule with this data.
     */
    create: XOR<PublicScheduleCreateInput, PublicScheduleUncheckedCreateInput>
    /**
     * In case the PublicSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicScheduleUpdateInput, PublicScheduleUncheckedUpdateInput>
  }

  /**
   * PublicSchedule delete
   */
  export type PublicScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
    /**
     * Filter which PublicSchedule to delete.
     */
    where: PublicScheduleWhereUniqueInput
  }

  /**
   * PublicSchedule deleteMany
   */
  export type PublicScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicSchedules to delete
     */
    where?: PublicScheduleWhereInput
    /**
     * Limit how many PublicSchedules to delete.
     */
    limit?: number
  }

  /**
   * PublicSchedule without action
   */
  export type PublicScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicSchedule
     */
    select?: PublicScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicSchedule
     */
    omit?: PublicScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicScheduleInclude<ExtArgs> | null
  }


  /**
   * Model UserPlans
   */

  export type AggregateUserPlans = {
    _count: UserPlansCountAggregateOutputType | null
    _avg: UserPlansAvgAggregateOutputType | null
    _sum: UserPlansSumAggregateOutputType | null
    _min: UserPlansMinAggregateOutputType | null
    _max: UserPlansMaxAggregateOutputType | null
  }

  export type UserPlansAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    planId: number | null
  }

  export type UserPlansSumAggregateOutputType = {
    id: number | null
    userId: number | null
    planId: number | null
  }

  export type UserPlansMinAggregateOutputType = {
    id: number | null
    userId: number | null
    planId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPlansMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    planId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPlansCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPlansAvgAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
  }

  export type UserPlansSumAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
  }

  export type UserPlansMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPlansMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPlansCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPlansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPlans to aggregate.
     */
    where?: UserPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlans to fetch.
     */
    orderBy?: UserPlansOrderByWithRelationInput | UserPlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPlans
    **/
    _count?: true | UserPlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPlansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPlansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPlansMaxAggregateInputType
  }

  export type GetUserPlansAggregateType<T extends UserPlansAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPlans[P]>
      : GetScalarType<T[P], AggregateUserPlans[P]>
  }




  export type UserPlansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlansWhereInput
    orderBy?: UserPlansOrderByWithAggregationInput | UserPlansOrderByWithAggregationInput[]
    by: UserPlansScalarFieldEnum[] | UserPlansScalarFieldEnum
    having?: UserPlansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPlansCountAggregateInputType | true
    _avg?: UserPlansAvgAggregateInputType
    _sum?: UserPlansSumAggregateInputType
    _min?: UserPlansMinAggregateInputType
    _max?: UserPlansMaxAggregateInputType
  }

  export type UserPlansGroupByOutputType = {
    id: number
    userId: number
    planId: number
    createdAt: Date
    updatedAt: Date
    _count: UserPlansCountAggregateOutputType | null
    _avg: UserPlansAvgAggregateOutputType | null
    _sum: UserPlansSumAggregateOutputType | null
    _min: UserPlansMinAggregateOutputType | null
    _max: UserPlansMaxAggregateOutputType | null
  }

  type GetUserPlansGroupByPayload<T extends UserPlansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPlansGroupByOutputType[P]>
            : GetScalarType<T[P], UserPlansGroupByOutputType[P]>
        }
      >
    >


  export type UserPlansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPlans"]>

  export type UserPlansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPlans"]>

  export type UserPlansSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPlans"]>

  export type UserPlansSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPlansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "createdAt" | "updatedAt", ExtArgs["result"]["userPlans"]>
  export type UserPlansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type UserPlansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type UserPlansIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $UserPlansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPlans"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      planId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPlans"]>
    composites: {}
  }

  type UserPlansGetPayload<S extends boolean | null | undefined | UserPlansDefaultArgs> = $Result.GetResult<Prisma.$UserPlansPayload, S>

  type UserPlansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPlansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPlansCountAggregateInputType | true
    }

  export interface UserPlansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPlans'], meta: { name: 'UserPlans' } }
    /**
     * Find zero or one UserPlans that matches the filter.
     * @param {UserPlansFindUniqueArgs} args - Arguments to find a UserPlans
     * @example
     * // Get one UserPlans
     * const userPlans = await prisma.userPlans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPlansFindUniqueArgs>(args: SelectSubset<T, UserPlansFindUniqueArgs<ExtArgs>>): Prisma__UserPlansClient<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPlans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPlansFindUniqueOrThrowArgs} args - Arguments to find a UserPlans
     * @example
     * // Get one UserPlans
     * const userPlans = await prisma.userPlans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPlansFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPlansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPlansClient<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlansFindFirstArgs} args - Arguments to find a UserPlans
     * @example
     * // Get one UserPlans
     * const userPlans = await prisma.userPlans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPlansFindFirstArgs>(args?: SelectSubset<T, UserPlansFindFirstArgs<ExtArgs>>): Prisma__UserPlansClient<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPlans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlansFindFirstOrThrowArgs} args - Arguments to find a UserPlans
     * @example
     * // Get one UserPlans
     * const userPlans = await prisma.userPlans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPlansFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPlansFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPlansClient<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPlans
     * const userPlans = await prisma.userPlans.findMany()
     * 
     * // Get first 10 UserPlans
     * const userPlans = await prisma.userPlans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPlansWithIdOnly = await prisma.userPlans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPlansFindManyArgs>(args?: SelectSubset<T, UserPlansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPlans.
     * @param {UserPlansCreateArgs} args - Arguments to create a UserPlans.
     * @example
     * // Create one UserPlans
     * const UserPlans = await prisma.userPlans.create({
     *   data: {
     *     // ... data to create a UserPlans
     *   }
     * })
     * 
     */
    create<T extends UserPlansCreateArgs>(args: SelectSubset<T, UserPlansCreateArgs<ExtArgs>>): Prisma__UserPlansClient<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPlans.
     * @param {UserPlansCreateManyArgs} args - Arguments to create many UserPlans.
     * @example
     * // Create many UserPlans
     * const userPlans = await prisma.userPlans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPlansCreateManyArgs>(args?: SelectSubset<T, UserPlansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPlans and returns the data saved in the database.
     * @param {UserPlansCreateManyAndReturnArgs} args - Arguments to create many UserPlans.
     * @example
     * // Create many UserPlans
     * const userPlans = await prisma.userPlans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPlans and only return the `id`
     * const userPlansWithIdOnly = await prisma.userPlans.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPlansCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPlansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPlans.
     * @param {UserPlansDeleteArgs} args - Arguments to delete one UserPlans.
     * @example
     * // Delete one UserPlans
     * const UserPlans = await prisma.userPlans.delete({
     *   where: {
     *     // ... filter to delete one UserPlans
     *   }
     * })
     * 
     */
    delete<T extends UserPlansDeleteArgs>(args: SelectSubset<T, UserPlansDeleteArgs<ExtArgs>>): Prisma__UserPlansClient<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPlans.
     * @param {UserPlansUpdateArgs} args - Arguments to update one UserPlans.
     * @example
     * // Update one UserPlans
     * const userPlans = await prisma.userPlans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPlansUpdateArgs>(args: SelectSubset<T, UserPlansUpdateArgs<ExtArgs>>): Prisma__UserPlansClient<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPlans.
     * @param {UserPlansDeleteManyArgs} args - Arguments to filter UserPlans to delete.
     * @example
     * // Delete a few UserPlans
     * const { count } = await prisma.userPlans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPlansDeleteManyArgs>(args?: SelectSubset<T, UserPlansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPlans
     * const userPlans = await prisma.userPlans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPlansUpdateManyArgs>(args: SelectSubset<T, UserPlansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPlans and returns the data updated in the database.
     * @param {UserPlansUpdateManyAndReturnArgs} args - Arguments to update many UserPlans.
     * @example
     * // Update many UserPlans
     * const userPlans = await prisma.userPlans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPlans and only return the `id`
     * const userPlansWithIdOnly = await prisma.userPlans.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPlansUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPlansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPlans.
     * @param {UserPlansUpsertArgs} args - Arguments to update or create a UserPlans.
     * @example
     * // Update or create a UserPlans
     * const userPlans = await prisma.userPlans.upsert({
     *   create: {
     *     // ... data to create a UserPlans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPlans we want to update
     *   }
     * })
     */
    upsert<T extends UserPlansUpsertArgs>(args: SelectSubset<T, UserPlansUpsertArgs<ExtArgs>>): Prisma__UserPlansClient<$Result.GetResult<Prisma.$UserPlansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlansCountArgs} args - Arguments to filter UserPlans to count.
     * @example
     * // Count the number of UserPlans
     * const count = await prisma.userPlans.count({
     *   where: {
     *     // ... the filter for the UserPlans we want to count
     *   }
     * })
    **/
    count<T extends UserPlansCountArgs>(
      args?: Subset<T, UserPlansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPlansAggregateArgs>(args: Subset<T, UserPlansAggregateArgs>): Prisma.PrismaPromise<GetUserPlansAggregateType<T>>

    /**
     * Group by UserPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPlansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPlansGroupByArgs['orderBy'] }
        : { orderBy?: UserPlansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPlansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPlans model
   */
  readonly fields: UserPlansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPlans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPlansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPlans model
   */
  interface UserPlansFieldRefs {
    readonly id: FieldRef<"UserPlans", 'Int'>
    readonly userId: FieldRef<"UserPlans", 'Int'>
    readonly planId: FieldRef<"UserPlans", 'Int'>
    readonly createdAt: FieldRef<"UserPlans", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPlans", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPlans findUnique
   */
  export type UserPlansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
    /**
     * Filter, which UserPlans to fetch.
     */
    where: UserPlansWhereUniqueInput
  }

  /**
   * UserPlans findUniqueOrThrow
   */
  export type UserPlansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
    /**
     * Filter, which UserPlans to fetch.
     */
    where: UserPlansWhereUniqueInput
  }

  /**
   * UserPlans findFirst
   */
  export type UserPlansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
    /**
     * Filter, which UserPlans to fetch.
     */
    where?: UserPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlans to fetch.
     */
    orderBy?: UserPlansOrderByWithRelationInput | UserPlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPlans.
     */
    cursor?: UserPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPlans.
     */
    distinct?: UserPlansScalarFieldEnum | UserPlansScalarFieldEnum[]
  }

  /**
   * UserPlans findFirstOrThrow
   */
  export type UserPlansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
    /**
     * Filter, which UserPlans to fetch.
     */
    where?: UserPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlans to fetch.
     */
    orderBy?: UserPlansOrderByWithRelationInput | UserPlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPlans.
     */
    cursor?: UserPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPlans.
     */
    distinct?: UserPlansScalarFieldEnum | UserPlansScalarFieldEnum[]
  }

  /**
   * UserPlans findMany
   */
  export type UserPlansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
    /**
     * Filter, which UserPlans to fetch.
     */
    where?: UserPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlans to fetch.
     */
    orderBy?: UserPlansOrderByWithRelationInput | UserPlansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPlans.
     */
    cursor?: UserPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlans.
     */
    skip?: number
    distinct?: UserPlansScalarFieldEnum | UserPlansScalarFieldEnum[]
  }

  /**
   * UserPlans create
   */
  export type UserPlansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPlans.
     */
    data: XOR<UserPlansCreateInput, UserPlansUncheckedCreateInput>
  }

  /**
   * UserPlans createMany
   */
  export type UserPlansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPlans.
     */
    data: UserPlansCreateManyInput | UserPlansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPlans createManyAndReturn
   */
  export type UserPlansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * The data used to create many UserPlans.
     */
    data: UserPlansCreateManyInput | UserPlansCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPlans update
   */
  export type UserPlansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPlans.
     */
    data: XOR<UserPlansUpdateInput, UserPlansUncheckedUpdateInput>
    /**
     * Choose, which UserPlans to update.
     */
    where: UserPlansWhereUniqueInput
  }

  /**
   * UserPlans updateMany
   */
  export type UserPlansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPlans.
     */
    data: XOR<UserPlansUpdateManyMutationInput, UserPlansUncheckedUpdateManyInput>
    /**
     * Filter which UserPlans to update
     */
    where?: UserPlansWhereInput
    /**
     * Limit how many UserPlans to update.
     */
    limit?: number
  }

  /**
   * UserPlans updateManyAndReturn
   */
  export type UserPlansUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * The data used to update UserPlans.
     */
    data: XOR<UserPlansUpdateManyMutationInput, UserPlansUncheckedUpdateManyInput>
    /**
     * Filter which UserPlans to update
     */
    where?: UserPlansWhereInput
    /**
     * Limit how many UserPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPlans upsert
   */
  export type UserPlansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPlans to update in case it exists.
     */
    where: UserPlansWhereUniqueInput
    /**
     * In case the UserPlans found by the `where` argument doesn't exist, create a new UserPlans with this data.
     */
    create: XOR<UserPlansCreateInput, UserPlansUncheckedCreateInput>
    /**
     * In case the UserPlans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPlansUpdateInput, UserPlansUncheckedUpdateInput>
  }

  /**
   * UserPlans delete
   */
  export type UserPlansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
    /**
     * Filter which UserPlans to delete.
     */
    where: UserPlansWhereUniqueInput
  }

  /**
   * UserPlans deleteMany
   */
  export type UserPlansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPlans to delete
     */
    where?: UserPlansWhereInput
    /**
     * Limit how many UserPlans to delete.
     */
    limit?: number
  }

  /**
   * UserPlans without action
   */
  export type UserPlansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlans
     */
    select?: UserPlansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPlans
     */
    omit?: UserPlansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlansInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    email: 'email',
    phone: 'phone',
    cpf: 'cpf',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    social_name: 'social_name',
    fantasy_name: 'fantasy_name',
    cnpj: 'cnpj',
    email: 'email',
    phone: 'phone',
    is_active: 'is_active',
    office: 'office',
    image_path: 'image_path',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    inactiveAt: 'inactiveAt',
    userId: 'userId'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    price: 'price',
    is_active: 'is_active',
    duration: 'duration',
    is_quantitative: 'is_quantitative',
    limit_for_day: 'limit_for_day',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    price: 'price',
    recurrent: 'recurrent',
    description: 'description',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    serviceId: 'serviceId',
    userId: 'userId',
    organizationId: 'organizationId',
    contractAt: 'contractAt',
    status: 'status',
    rememberUser: 'rememberUser',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    canceledAt: 'canceledAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const PublicScheduleScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    contractAt: 'contractAt',
    description: 'description',
    organizationId: 'organizationId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublicScheduleScalarFieldEnum = (typeof PublicScheduleScalarFieldEnum)[keyof typeof PublicScheduleScalarFieldEnum]


  export const UserPlansScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPlansScalarFieldEnum = (typeof UserPlansScalarFieldEnum)[keyof typeof UserPlansScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Recurrent'
   */
  export type EnumRecurrentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Recurrent'>
    


  /**
   * Reference to a field of type 'Recurrent[]'
   */
  export type ListEnumRecurrentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Recurrent[]'>
    


  /**
   * Reference to a field of type 'StatusSchedules'
   */
  export type EnumStatusSchedulesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSchedules'>
    


  /**
   * Reference to a field of type 'StatusSchedules[]'
   */
  export type ListEnumStatusSchedulesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSchedules[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    uuid?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    schedules?: ScheduleListRelationFilter
    UserPlans?: UserPlansListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    schedules?: ScheduleOrderByRelationAggregateInput
    UserPlans?: UserPlansOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    schedules?: ScheduleListRelationFilter
    UserPlans?: UserPlansListRelationFilter
  }, "id" | "uuid">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    uuid?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    uuid?: UuidFilter<"Organization"> | string
    social_name?: StringFilter<"Organization"> | string
    fantasy_name?: StringFilter<"Organization"> | string
    cnpj?: StringFilter<"Organization"> | string
    email?: StringFilter<"Organization"> | string
    phone?: StringFilter<"Organization"> | string
    is_active?: BoolFilter<"Organization"> | boolean
    office?: StringFilter<"Organization"> | string
    image_path?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    inactiveAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    userId?: IntFilter<"Organization"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    services?: ServiceListRelationFilter
    plans?: PlanListRelationFilter
    schedules?: ScheduleListRelationFilter
    PublicSchedule?: PublicScheduleListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    social_name?: SortOrder
    fantasy_name?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    office?: SortOrder
    image_path?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inactiveAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    services?: ServiceOrderByRelationAggregateInput
    plans?: PlanOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
    PublicSchedule?: PublicScheduleOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    userId?: number
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    social_name?: StringFilter<"Organization"> | string
    fantasy_name?: StringFilter<"Organization"> | string
    cnpj?: StringFilter<"Organization"> | string
    email?: StringFilter<"Organization"> | string
    phone?: StringFilter<"Organization"> | string
    is_active?: BoolFilter<"Organization"> | boolean
    office?: StringFilter<"Organization"> | string
    image_path?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    inactiveAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    services?: ServiceListRelationFilter
    plans?: PlanListRelationFilter
    schedules?: ScheduleListRelationFilter
    PublicSchedule?: PublicScheduleListRelationFilter
  }, "id" | "uuid" | "userId">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    social_name?: SortOrder
    fantasy_name?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    office?: SortOrder
    image_path?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inactiveAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    uuid?: UuidWithAggregatesFilter<"Organization"> | string
    social_name?: StringWithAggregatesFilter<"Organization"> | string
    fantasy_name?: StringWithAggregatesFilter<"Organization"> | string
    cnpj?: StringWithAggregatesFilter<"Organization"> | string
    email?: StringWithAggregatesFilter<"Organization"> | string
    phone?: StringWithAggregatesFilter<"Organization"> | string
    is_active?: BoolWithAggregatesFilter<"Organization"> | boolean
    office?: StringWithAggregatesFilter<"Organization"> | string
    image_path?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    inactiveAt?: DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null
    userId?: IntWithAggregatesFilter<"Organization"> | number
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    uuid?: UuidFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    price?: IntFilter<"Service"> | number
    is_active?: BoolFilter<"Service"> | boolean
    duration?: StringFilter<"Service"> | string
    is_quantitative?: BoolFilter<"Service"> | boolean
    limit_for_day?: IntNullableFilter<"Service"> | number | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    organizationId?: IntFilter<"Service"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    schedules?: ScheduleListRelationFilter
    PublicSchedule?: PublicScheduleListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    duration?: SortOrder
    is_quantitative?: SortOrder
    limit_for_day?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    schedules?: ScheduleOrderByRelationAggregateInput
    PublicSchedule?: PublicScheduleOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    price?: IntFilter<"Service"> | number
    is_active?: BoolFilter<"Service"> | boolean
    duration?: StringFilter<"Service"> | string
    is_quantitative?: BoolFilter<"Service"> | boolean
    limit_for_day?: IntNullableFilter<"Service"> | number | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    organizationId?: IntFilter<"Service"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    schedules?: ScheduleListRelationFilter
    PublicSchedule?: PublicScheduleListRelationFilter
  }, "id" | "uuid">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    duration?: SortOrder
    is_quantitative?: SortOrder
    limit_for_day?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    uuid?: UuidWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    price?: IntWithAggregatesFilter<"Service"> | number
    is_active?: BoolWithAggregatesFilter<"Service"> | boolean
    duration?: StringWithAggregatesFilter<"Service"> | string
    is_quantitative?: BoolWithAggregatesFilter<"Service"> | boolean
    limit_for_day?: IntNullableWithAggregatesFilter<"Service"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    organizationId?: IntWithAggregatesFilter<"Service"> | number
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: IntFilter<"Plan"> | number
    uuid?: UuidFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    price?: IntFilter<"Plan"> | number
    recurrent?: EnumRecurrentFilter<"Plan"> | $Enums.Recurrent
    description?: StringFilter<"Plan"> | string
    dueDate?: DateTimeNullableFilter<"Plan"> | Date | string | null
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    organizationId?: IntFilter<"Plan"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    UserPlans?: UserPlansListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    recurrent?: SortOrder
    description?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    UserPlans?: UserPlansOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    price?: IntFilter<"Plan"> | number
    recurrent?: EnumRecurrentFilter<"Plan"> | $Enums.Recurrent
    description?: StringFilter<"Plan"> | string
    dueDate?: DateTimeNullableFilter<"Plan"> | Date | string | null
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    organizationId?: IntFilter<"Plan"> | number
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    UserPlans?: UserPlansListRelationFilter
  }, "id" | "uuid">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    recurrent?: SortOrder
    description?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plan"> | number
    uuid?: UuidWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    price?: IntWithAggregatesFilter<"Plan"> | number
    recurrent?: EnumRecurrentWithAggregatesFilter<"Plan"> | $Enums.Recurrent
    description?: StringWithAggregatesFilter<"Plan"> | string
    dueDate?: DateTimeNullableWithAggregatesFilter<"Plan"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    organizationId?: IntWithAggregatesFilter<"Plan"> | number
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: IntFilter<"Schedule"> | number
    uuid?: UuidFilter<"Schedule"> | string
    serviceId?: IntFilter<"Schedule"> | number
    userId?: IntFilter<"Schedule"> | number
    organizationId?: IntFilter<"Schedule"> | number
    contractAt?: DateTimeFilter<"Schedule"> | Date | string
    status?: EnumStatusSchedulesFilter<"Schedule"> | $Enums.StatusSchedules
    rememberUser?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    contractAt?: SortOrder
    status?: SortOrder
    rememberUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    service?: ServiceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    serviceId?: IntFilter<"Schedule"> | number
    userId?: IntFilter<"Schedule"> | number
    organizationId?: IntFilter<"Schedule"> | number
    contractAt?: DateTimeFilter<"Schedule"> | Date | string
    status?: EnumStatusSchedulesFilter<"Schedule"> | $Enums.StatusSchedules
    rememberUser?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Schedule"> | Date | string | null
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "uuid">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    contractAt?: SortOrder
    status?: SortOrder
    rememberUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedule"> | number
    uuid?: UuidWithAggregatesFilter<"Schedule"> | string
    serviceId?: IntWithAggregatesFilter<"Schedule"> | number
    userId?: IntWithAggregatesFilter<"Schedule"> | number
    organizationId?: IntWithAggregatesFilter<"Schedule"> | number
    contractAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    status?: EnumStatusSchedulesWithAggregatesFilter<"Schedule"> | $Enums.StatusSchedules
    rememberUser?: BoolWithAggregatesFilter<"Schedule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Schedule"> | Date | string | null
  }

  export type PublicScheduleWhereInput = {
    AND?: PublicScheduleWhereInput | PublicScheduleWhereInput[]
    OR?: PublicScheduleWhereInput[]
    NOT?: PublicScheduleWhereInput | PublicScheduleWhereInput[]
    id?: IntFilter<"PublicSchedule"> | number
    serviceId?: IntFilter<"PublicSchedule"> | number
    contractAt?: DateTimeFilter<"PublicSchedule"> | Date | string
    description?: StringFilter<"PublicSchedule"> | string
    organizationId?: IntFilter<"PublicSchedule"> | number
    status?: EnumStatusSchedulesFilter<"PublicSchedule"> | $Enums.StatusSchedules
    createdAt?: DateTimeFilter<"PublicSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"PublicSchedule"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type PublicScheduleOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    contractAt?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type PublicScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublicScheduleWhereInput | PublicScheduleWhereInput[]
    OR?: PublicScheduleWhereInput[]
    NOT?: PublicScheduleWhereInput | PublicScheduleWhereInput[]
    serviceId?: IntFilter<"PublicSchedule"> | number
    contractAt?: DateTimeFilter<"PublicSchedule"> | Date | string
    description?: StringFilter<"PublicSchedule"> | string
    organizationId?: IntFilter<"PublicSchedule"> | number
    status?: EnumStatusSchedulesFilter<"PublicSchedule"> | $Enums.StatusSchedules
    createdAt?: DateTimeFilter<"PublicSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"PublicSchedule"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id">

  export type PublicScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    contractAt?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublicScheduleCountOrderByAggregateInput
    _avg?: PublicScheduleAvgOrderByAggregateInput
    _max?: PublicScheduleMaxOrderByAggregateInput
    _min?: PublicScheduleMinOrderByAggregateInput
    _sum?: PublicScheduleSumOrderByAggregateInput
  }

  export type PublicScheduleScalarWhereWithAggregatesInput = {
    AND?: PublicScheduleScalarWhereWithAggregatesInput | PublicScheduleScalarWhereWithAggregatesInput[]
    OR?: PublicScheduleScalarWhereWithAggregatesInput[]
    NOT?: PublicScheduleScalarWhereWithAggregatesInput | PublicScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PublicSchedule"> | number
    serviceId?: IntWithAggregatesFilter<"PublicSchedule"> | number
    contractAt?: DateTimeWithAggregatesFilter<"PublicSchedule"> | Date | string
    description?: StringWithAggregatesFilter<"PublicSchedule"> | string
    organizationId?: IntWithAggregatesFilter<"PublicSchedule"> | number
    status?: EnumStatusSchedulesWithAggregatesFilter<"PublicSchedule"> | $Enums.StatusSchedules
    createdAt?: DateTimeWithAggregatesFilter<"PublicSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PublicSchedule"> | Date | string
  }

  export type UserPlansWhereInput = {
    AND?: UserPlansWhereInput | UserPlansWhereInput[]
    OR?: UserPlansWhereInput[]
    NOT?: UserPlansWhereInput | UserPlansWhereInput[]
    id?: IntFilter<"UserPlans"> | number
    userId?: IntFilter<"UserPlans"> | number
    planId?: IntFilter<"UserPlans"> | number
    createdAt?: DateTimeFilter<"UserPlans"> | Date | string
    updatedAt?: DateTimeFilter<"UserPlans"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
  }

  export type UserPlansOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
  }

  export type UserPlansWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserPlansWhereInput | UserPlansWhereInput[]
    OR?: UserPlansWhereInput[]
    NOT?: UserPlansWhereInput | UserPlansWhereInput[]
    userId?: IntFilter<"UserPlans"> | number
    planId?: IntFilter<"UserPlans"> | number
    createdAt?: DateTimeFilter<"UserPlans"> | Date | string
    updatedAt?: DateTimeFilter<"UserPlans"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
  }, "id">

  export type UserPlansOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPlansCountOrderByAggregateInput
    _avg?: UserPlansAvgOrderByAggregateInput
    _max?: UserPlansMaxOrderByAggregateInput
    _min?: UserPlansMinOrderByAggregateInput
    _sum?: UserPlansSumOrderByAggregateInput
  }

  export type UserPlansScalarWhereWithAggregatesInput = {
    AND?: UserPlansScalarWhereWithAggregatesInput | UserPlansScalarWhereWithAggregatesInput[]
    OR?: UserPlansScalarWhereWithAggregatesInput[]
    NOT?: UserPlansScalarWhereWithAggregatesInput | UserPlansScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPlans"> | number
    userId?: IntWithAggregatesFilter<"UserPlans"> | number
    planId?: IntWithAggregatesFilter<"UserPlans"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserPlans"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPlans"> | Date | string
  }

  export type UserCreateInput = {
    uuid?: string
    name: string
    email: string
    phone: string
    cpf: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization?: OrganizationCreateNestedOneWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutUserInput
    UserPlans?: UserPlansCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    phone: string
    cpf: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization?: OrganizationUncheckedCreateNestedOneWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput
    UserPlans?: UserPlansUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUpdateOneWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutUserNestedInput
    UserPlans?: UserPlansUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUncheckedUpdateOneWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
    UserPlans?: UserPlansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    phone: string
    cpf: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    user: UserCreateNestedOneWithoutOrganizationInput
    services?: ServiceCreateNestedManyWithoutOrganizationInput
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    schedules?: ScheduleCreateNestedManyWithoutOrganizationInput
    PublicSchedule?: PublicScheduleCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    userId: number
    services?: ServiceUncheckedCreateNestedManyWithoutOrganizationInput
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutOrganizationInput
    PublicSchedule?: PublicScheduleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutOrganizationNestedInput
    services?: ServiceUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    schedules?: ScheduleUpdateManyWithoutOrganizationNestedInput
    PublicSchedule?: PublicScheduleUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    services?: ServiceUncheckedUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutOrganizationNestedInput
    PublicSchedule?: PublicScheduleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    userId: number
  }

  export type OrganizationUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceCreateInput = {
    uuid?: string
    name: string
    price: number
    is_active?: boolean
    duration: string
    is_quantitative?: boolean
    limit_for_day?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutServicesInput
    schedules?: ScheduleCreateNestedManyWithoutServiceInput
    PublicSchedule?: PublicScheduleCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    uuid?: string
    name: string
    price: number
    is_active?: boolean
    duration: string
    is_quantitative?: boolean
    limit_for_day?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
    schedules?: ScheduleUncheckedCreateNestedManyWithoutServiceInput
    PublicSchedule?: PublicScheduleUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    duration?: StringFieldUpdateOperationsInput | string
    is_quantitative?: BoolFieldUpdateOperationsInput | boolean
    limit_for_day?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutServicesNestedInput
    schedules?: ScheduleUpdateManyWithoutServiceNestedInput
    PublicSchedule?: PublicScheduleUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    duration?: StringFieldUpdateOperationsInput | string
    is_quantitative?: BoolFieldUpdateOperationsInput | boolean
    limit_for_day?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
    schedules?: ScheduleUncheckedUpdateManyWithoutServiceNestedInput
    PublicSchedule?: PublicScheduleUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    uuid?: string
    name: string
    price: number
    is_active?: boolean
    duration: string
    is_quantitative?: boolean
    limit_for_day?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
  }

  export type ServiceUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    duration?: StringFieldUpdateOperationsInput | string
    is_quantitative?: BoolFieldUpdateOperationsInput | boolean
    limit_for_day?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    duration?: StringFieldUpdateOperationsInput | string
    is_quantitative?: BoolFieldUpdateOperationsInput | boolean
    limit_for_day?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type PlanCreateInput = {
    uuid?: string
    name: string
    price: number
    recurrent: $Enums.Recurrent
    description: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPlansInput
    UserPlans?: UserPlansCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: number
    uuid?: string
    name: string
    price: number
    recurrent: $Enums.Recurrent
    description: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
    UserPlans?: UserPlansUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    recurrent?: EnumRecurrentFieldUpdateOperationsInput | $Enums.Recurrent
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPlansNestedInput
    UserPlans?: UserPlansUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    recurrent?: EnumRecurrentFieldUpdateOperationsInput | $Enums.Recurrent
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
    UserPlans?: UserPlansUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: number
    uuid?: string
    name: string
    price: number
    recurrent: $Enums.Recurrent
    description: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
  }

  export type PlanUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    recurrent?: EnumRecurrentFieldUpdateOperationsInput | $Enums.Recurrent
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    recurrent?: EnumRecurrentFieldUpdateOperationsInput | $Enums.Recurrent
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateInput = {
    uuid?: string
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
    service: ServiceCreateNestedOneWithoutSchedulesInput
    user: UserCreateNestedOneWithoutSchedulesInput
    organization: OrganizationCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    uuid?: string
    serviceId: number
    userId: number
    organizationId: number
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type ScheduleUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service?: ServiceUpdateOneRequiredWithoutSchedulesNestedInput
    user?: UserUpdateOneRequiredWithoutSchedulesNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduleCreateManyInput = {
    id?: number
    uuid?: string
    serviceId: number
    userId: number
    organizationId: number
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type ScheduleUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicScheduleCreateInput = {
    contractAt: Date | string
    description: string
    status?: $Enums.StatusSchedules
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutPublicScheduleInput
    organization: OrganizationCreateNestedOneWithoutPublicScheduleInput
  }

  export type PublicScheduleUncheckedCreateInput = {
    id?: number
    serviceId: number
    contractAt: Date | string
    description: string
    organizationId: number
    status?: $Enums.StatusSchedules
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicScheduleUpdateInput = {
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutPublicScheduleNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutPublicScheduleNestedInput
  }

  export type PublicScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicScheduleCreateManyInput = {
    id?: number
    serviceId: number
    contractAt: Date | string
    description: string
    organizationId: number
    status?: $Enums.StatusSchedules
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicScheduleUpdateManyMutationInput = {
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlansCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPlansInput
    plan: PlanCreateNestedOneWithoutUserPlansInput
  }

  export type UserPlansUncheckedCreateInput = {
    id?: number
    userId: number
    planId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlansUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPlansNestedInput
    plan?: PlanUpdateOneRequiredWithoutUserPlansNestedInput
  }

  export type UserPlansUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlansCreateManyInput = {
    id?: number
    userId: number
    planId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlansUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlansUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type UserPlansListRelationFilter = {
    every?: UserPlansWhereInput
    some?: UserPlansWhereInput
    none?: UserPlansWhereInput
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPlansOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type PlanListRelationFilter = {
    every?: PlanWhereInput
    some?: PlanWhereInput
    none?: PlanWhereInput
  }

  export type PublicScheduleListRelationFilter = {
    every?: PublicScheduleWhereInput
    some?: PublicScheduleWhereInput
    none?: PublicScheduleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    social_name?: SortOrder
    fantasy_name?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    office?: SortOrder
    image_path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inactiveAt?: SortOrder
    userId?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    social_name?: SortOrder
    fantasy_name?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    office?: SortOrder
    image_path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inactiveAt?: SortOrder
    userId?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    social_name?: SortOrder
    fantasy_name?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    office?: SortOrder
    image_path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inactiveAt?: SortOrder
    userId?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    duration?: SortOrder
    is_quantitative?: SortOrder
    limit_for_day?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    limit_for_day?: SortOrder
    organizationId?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    duration?: SortOrder
    is_quantitative?: SortOrder
    limit_for_day?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    is_active?: SortOrder
    duration?: SortOrder
    is_quantitative?: SortOrder
    limit_for_day?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    limit_for_day?: SortOrder
    organizationId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRecurrentFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurrent | EnumRecurrentFieldRefInput<$PrismaModel>
    in?: $Enums.Recurrent[] | ListEnumRecurrentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurrent[] | ListEnumRecurrentFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrentFilter<$PrismaModel> | $Enums.Recurrent
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    recurrent?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    organizationId?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    recurrent?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    price?: SortOrder
    recurrent?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    organizationId?: SortOrder
  }

  export type EnumRecurrentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurrent | EnumRecurrentFieldRefInput<$PrismaModel>
    in?: $Enums.Recurrent[] | ListEnumRecurrentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurrent[] | ListEnumRecurrentFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrentWithAggregatesFilter<$PrismaModel> | $Enums.Recurrent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurrentFilter<$PrismaModel>
    _max?: NestedEnumRecurrentFilter<$PrismaModel>
  }

  export type EnumStatusSchedulesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSchedules | EnumStatusSchedulesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSchedules[] | ListEnumStatusSchedulesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSchedules[] | ListEnumStatusSchedulesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSchedulesFilter<$PrismaModel> | $Enums.StatusSchedules
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    contractAt?: SortOrder
    status?: SortOrder
    rememberUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canceledAt?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    contractAt?: SortOrder
    status?: SortOrder
    rememberUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canceledAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    contractAt?: SortOrder
    status?: SortOrder
    rememberUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    canceledAt?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
  }

  export type EnumStatusSchedulesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSchedules | EnumStatusSchedulesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSchedules[] | ListEnumStatusSchedulesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSchedules[] | ListEnumStatusSchedulesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSchedulesWithAggregatesFilter<$PrismaModel> | $Enums.StatusSchedules
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSchedulesFilter<$PrismaModel>
    _max?: NestedEnumStatusSchedulesFilter<$PrismaModel>
  }

  export type PublicScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    contractAt?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    organizationId?: SortOrder
  }

  export type PublicScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    contractAt?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    contractAt?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    organizationId?: SortOrder
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type UserPlansCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPlansAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
  }

  export type UserPlansMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPlansMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPlansSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
  }

  export type OrganizationCreateNestedOneWithoutUserInput = {
    create?: XOR<OrganizationCreateWithoutUserInput, OrganizationUncheckedCreateWithoutUserInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUserInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ScheduleCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type UserPlansCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPlansCreateWithoutUserInput, UserPlansUncheckedCreateWithoutUserInput> | UserPlansCreateWithoutUserInput[] | UserPlansUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlansCreateOrConnectWithoutUserInput | UserPlansCreateOrConnectWithoutUserInput[]
    createMany?: UserPlansCreateManyUserInputEnvelope
    connect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
  }

  export type OrganizationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OrganizationCreateWithoutUserInput, OrganizationUncheckedCreateWithoutUserInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUserInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ScheduleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type UserPlansUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPlansCreateWithoutUserInput, UserPlansUncheckedCreateWithoutUserInput> | UserPlansCreateWithoutUserInput[] | UserPlansUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlansCreateOrConnectWithoutUserInput | UserPlansCreateOrConnectWithoutUserInput[]
    createMany?: UserPlansCreateManyUserInputEnvelope
    connect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationUpdateOneWithoutUserNestedInput = {
    create?: XOR<OrganizationCreateWithoutUserInput, OrganizationUncheckedCreateWithoutUserInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUserInput
    upsert?: OrganizationUpsertWithoutUserInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUserInput, OrganizationUpdateWithoutUserInput>, OrganizationUncheckedUpdateWithoutUserInput>
  }

  export type ScheduleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutUserInput | ScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutUserInput | ScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutUserInput | ScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type UserPlansUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPlansCreateWithoutUserInput, UserPlansUncheckedCreateWithoutUserInput> | UserPlansCreateWithoutUserInput[] | UserPlansUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlansCreateOrConnectWithoutUserInput | UserPlansCreateOrConnectWithoutUserInput[]
    upsert?: UserPlansUpsertWithWhereUniqueWithoutUserInput | UserPlansUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPlansCreateManyUserInputEnvelope
    set?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    disconnect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    delete?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    connect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    update?: UserPlansUpdateWithWhereUniqueWithoutUserInput | UserPlansUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPlansUpdateManyWithWhereWithoutUserInput | UserPlansUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPlansScalarWhereInput | UserPlansScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OrganizationCreateWithoutUserInput, OrganizationUncheckedCreateWithoutUserInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUserInput
    upsert?: OrganizationUpsertWithoutUserInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUserInput, OrganizationUpdateWithoutUserInput>, OrganizationUncheckedUpdateWithoutUserInput>
  }

  export type ScheduleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput> | ScheduleCreateWithoutUserInput[] | ScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutUserInput | ScheduleCreateOrConnectWithoutUserInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutUserInput | ScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScheduleCreateManyUserInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutUserInput | ScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutUserInput | ScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type UserPlansUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPlansCreateWithoutUserInput, UserPlansUncheckedCreateWithoutUserInput> | UserPlansCreateWithoutUserInput[] | UserPlansUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPlansCreateOrConnectWithoutUserInput | UserPlansCreateOrConnectWithoutUserInput[]
    upsert?: UserPlansUpsertWithWhereUniqueWithoutUserInput | UserPlansUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPlansCreateManyUserInputEnvelope
    set?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    disconnect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    delete?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    connect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    update?: UserPlansUpdateWithWhereUniqueWithoutUserInput | UserPlansUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPlansUpdateManyWithWhereWithoutUserInput | UserPlansUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPlansScalarWhereInput | UserPlansScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput> | ServiceCreateWithoutOrganizationInput[] | ServiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOrganizationInput | ServiceCreateOrConnectWithoutOrganizationInput[]
    createMany?: ServiceCreateManyOrganizationInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type PlanCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput> | PlanCreateWithoutOrganizationInput[] | PlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutOrganizationInput | PlanCreateOrConnectWithoutOrganizationInput[]
    createMany?: PlanCreateManyOrganizationInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ScheduleCreateWithoutOrganizationInput, ScheduleUncheckedCreateWithoutOrganizationInput> | ScheduleCreateWithoutOrganizationInput[] | ScheduleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutOrganizationInput | ScheduleCreateOrConnectWithoutOrganizationInput[]
    createMany?: ScheduleCreateManyOrganizationInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type PublicScheduleCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PublicScheduleCreateWithoutOrganizationInput, PublicScheduleUncheckedCreateWithoutOrganizationInput> | PublicScheduleCreateWithoutOrganizationInput[] | PublicScheduleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PublicScheduleCreateOrConnectWithoutOrganizationInput | PublicScheduleCreateOrConnectWithoutOrganizationInput[]
    createMany?: PublicScheduleCreateManyOrganizationInputEnvelope
    connect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput> | ServiceCreateWithoutOrganizationInput[] | ServiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOrganizationInput | ServiceCreateOrConnectWithoutOrganizationInput[]
    createMany?: ServiceCreateManyOrganizationInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type PlanUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput> | PlanCreateWithoutOrganizationInput[] | PlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutOrganizationInput | PlanCreateOrConnectWithoutOrganizationInput[]
    createMany?: PlanCreateManyOrganizationInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ScheduleCreateWithoutOrganizationInput, ScheduleUncheckedCreateWithoutOrganizationInput> | ScheduleCreateWithoutOrganizationInput[] | ScheduleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutOrganizationInput | ScheduleCreateOrConnectWithoutOrganizationInput[]
    createMany?: ScheduleCreateManyOrganizationInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type PublicScheduleUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PublicScheduleCreateWithoutOrganizationInput, PublicScheduleUncheckedCreateWithoutOrganizationInput> | PublicScheduleCreateWithoutOrganizationInput[] | PublicScheduleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PublicScheduleCreateOrConnectWithoutOrganizationInput | PublicScheduleCreateOrConnectWithoutOrganizationInput[]
    createMany?: PublicScheduleCreateManyOrganizationInputEnvelope
    connect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput
    upsert?: UserUpsertWithoutOrganizationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizationInput, UserUpdateWithoutOrganizationInput>, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type ServiceUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput> | ServiceCreateWithoutOrganizationInput[] | ServiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOrganizationInput | ServiceCreateOrConnectWithoutOrganizationInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutOrganizationInput | ServiceUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ServiceCreateManyOrganizationInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutOrganizationInput | ServiceUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutOrganizationInput | ServiceUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type PlanUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput> | PlanCreateWithoutOrganizationInput[] | PlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutOrganizationInput | PlanCreateOrConnectWithoutOrganizationInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutOrganizationInput | PlanUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PlanCreateManyOrganizationInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutOrganizationInput | PlanUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutOrganizationInput | PlanUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ScheduleCreateWithoutOrganizationInput, ScheduleUncheckedCreateWithoutOrganizationInput> | ScheduleCreateWithoutOrganizationInput[] | ScheduleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutOrganizationInput | ScheduleCreateOrConnectWithoutOrganizationInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutOrganizationInput | ScheduleUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ScheduleCreateManyOrganizationInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutOrganizationInput | ScheduleUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutOrganizationInput | ScheduleUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type PublicScheduleUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PublicScheduleCreateWithoutOrganizationInput, PublicScheduleUncheckedCreateWithoutOrganizationInput> | PublicScheduleCreateWithoutOrganizationInput[] | PublicScheduleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PublicScheduleCreateOrConnectWithoutOrganizationInput | PublicScheduleCreateOrConnectWithoutOrganizationInput[]
    upsert?: PublicScheduleUpsertWithWhereUniqueWithoutOrganizationInput | PublicScheduleUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PublicScheduleCreateManyOrganizationInputEnvelope
    set?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    disconnect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    delete?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    connect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    update?: PublicScheduleUpdateWithWhereUniqueWithoutOrganizationInput | PublicScheduleUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PublicScheduleUpdateManyWithWhereWithoutOrganizationInput | PublicScheduleUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PublicScheduleScalarWhereInput | PublicScheduleScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput> | ServiceCreateWithoutOrganizationInput[] | ServiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOrganizationInput | ServiceCreateOrConnectWithoutOrganizationInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutOrganizationInput | ServiceUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ServiceCreateManyOrganizationInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutOrganizationInput | ServiceUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutOrganizationInput | ServiceUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type PlanUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput> | PlanCreateWithoutOrganizationInput[] | PlanUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutOrganizationInput | PlanCreateOrConnectWithoutOrganizationInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutOrganizationInput | PlanUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PlanCreateManyOrganizationInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutOrganizationInput | PlanUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutOrganizationInput | PlanUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ScheduleCreateWithoutOrganizationInput, ScheduleUncheckedCreateWithoutOrganizationInput> | ScheduleCreateWithoutOrganizationInput[] | ScheduleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutOrganizationInput | ScheduleCreateOrConnectWithoutOrganizationInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutOrganizationInput | ScheduleUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ScheduleCreateManyOrganizationInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutOrganizationInput | ScheduleUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutOrganizationInput | ScheduleUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type PublicScheduleUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PublicScheduleCreateWithoutOrganizationInput, PublicScheduleUncheckedCreateWithoutOrganizationInput> | PublicScheduleCreateWithoutOrganizationInput[] | PublicScheduleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PublicScheduleCreateOrConnectWithoutOrganizationInput | PublicScheduleCreateOrConnectWithoutOrganizationInput[]
    upsert?: PublicScheduleUpsertWithWhereUniqueWithoutOrganizationInput | PublicScheduleUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PublicScheduleCreateManyOrganizationInputEnvelope
    set?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    disconnect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    delete?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    connect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    update?: PublicScheduleUpdateWithWhereUniqueWithoutOrganizationInput | PublicScheduleUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PublicScheduleUpdateManyWithWhereWithoutOrganizationInput | PublicScheduleUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PublicScheduleScalarWhereInput | PublicScheduleScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutServicesInput = {
    create?: XOR<OrganizationCreateWithoutServicesInput, OrganizationUncheckedCreateWithoutServicesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutServicesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ScheduleCreateNestedManyWithoutServiceInput = {
    create?: XOR<ScheduleCreateWithoutServiceInput, ScheduleUncheckedCreateWithoutServiceInput> | ScheduleCreateWithoutServiceInput[] | ScheduleUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutServiceInput | ScheduleCreateOrConnectWithoutServiceInput[]
    createMany?: ScheduleCreateManyServiceInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type PublicScheduleCreateNestedManyWithoutServiceInput = {
    create?: XOR<PublicScheduleCreateWithoutServiceInput, PublicScheduleUncheckedCreateWithoutServiceInput> | PublicScheduleCreateWithoutServiceInput[] | PublicScheduleUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PublicScheduleCreateOrConnectWithoutServiceInput | PublicScheduleCreateOrConnectWithoutServiceInput[]
    createMany?: PublicScheduleCreateManyServiceInputEnvelope
    connect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ScheduleCreateWithoutServiceInput, ScheduleUncheckedCreateWithoutServiceInput> | ScheduleCreateWithoutServiceInput[] | ScheduleUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutServiceInput | ScheduleCreateOrConnectWithoutServiceInput[]
    createMany?: ScheduleCreateManyServiceInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type PublicScheduleUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<PublicScheduleCreateWithoutServiceInput, PublicScheduleUncheckedCreateWithoutServiceInput> | PublicScheduleCreateWithoutServiceInput[] | PublicScheduleUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PublicScheduleCreateOrConnectWithoutServiceInput | PublicScheduleCreateOrConnectWithoutServiceInput[]
    createMany?: PublicScheduleCreateManyServiceInputEnvelope
    connect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrganizationUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<OrganizationCreateWithoutServicesInput, OrganizationUncheckedCreateWithoutServicesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutServicesInput
    upsert?: OrganizationUpsertWithoutServicesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutServicesInput, OrganizationUpdateWithoutServicesInput>, OrganizationUncheckedUpdateWithoutServicesInput>
  }

  export type ScheduleUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ScheduleCreateWithoutServiceInput, ScheduleUncheckedCreateWithoutServiceInput> | ScheduleCreateWithoutServiceInput[] | ScheduleUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutServiceInput | ScheduleCreateOrConnectWithoutServiceInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutServiceInput | ScheduleUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ScheduleCreateManyServiceInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutServiceInput | ScheduleUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutServiceInput | ScheduleUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type PublicScheduleUpdateManyWithoutServiceNestedInput = {
    create?: XOR<PublicScheduleCreateWithoutServiceInput, PublicScheduleUncheckedCreateWithoutServiceInput> | PublicScheduleCreateWithoutServiceInput[] | PublicScheduleUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PublicScheduleCreateOrConnectWithoutServiceInput | PublicScheduleCreateOrConnectWithoutServiceInput[]
    upsert?: PublicScheduleUpsertWithWhereUniqueWithoutServiceInput | PublicScheduleUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: PublicScheduleCreateManyServiceInputEnvelope
    set?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    disconnect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    delete?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    connect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    update?: PublicScheduleUpdateWithWhereUniqueWithoutServiceInput | PublicScheduleUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: PublicScheduleUpdateManyWithWhereWithoutServiceInput | PublicScheduleUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: PublicScheduleScalarWhereInput | PublicScheduleScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ScheduleCreateWithoutServiceInput, ScheduleUncheckedCreateWithoutServiceInput> | ScheduleCreateWithoutServiceInput[] | ScheduleUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutServiceInput | ScheduleCreateOrConnectWithoutServiceInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutServiceInput | ScheduleUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ScheduleCreateManyServiceInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutServiceInput | ScheduleUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutServiceInput | ScheduleUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type PublicScheduleUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<PublicScheduleCreateWithoutServiceInput, PublicScheduleUncheckedCreateWithoutServiceInput> | PublicScheduleCreateWithoutServiceInput[] | PublicScheduleUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PublicScheduleCreateOrConnectWithoutServiceInput | PublicScheduleCreateOrConnectWithoutServiceInput[]
    upsert?: PublicScheduleUpsertWithWhereUniqueWithoutServiceInput | PublicScheduleUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: PublicScheduleCreateManyServiceInputEnvelope
    set?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    disconnect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    delete?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    connect?: PublicScheduleWhereUniqueInput | PublicScheduleWhereUniqueInput[]
    update?: PublicScheduleUpdateWithWhereUniqueWithoutServiceInput | PublicScheduleUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: PublicScheduleUpdateManyWithWhereWithoutServiceInput | PublicScheduleUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: PublicScheduleScalarWhereInput | PublicScheduleScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutPlansInput = {
    create?: XOR<OrganizationCreateWithoutPlansInput, OrganizationUncheckedCreateWithoutPlansInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPlansInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserPlansCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserPlansCreateWithoutPlanInput, UserPlansUncheckedCreateWithoutPlanInput> | UserPlansCreateWithoutPlanInput[] | UserPlansUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserPlansCreateOrConnectWithoutPlanInput | UserPlansCreateOrConnectWithoutPlanInput[]
    createMany?: UserPlansCreateManyPlanInputEnvelope
    connect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
  }

  export type UserPlansUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserPlansCreateWithoutPlanInput, UserPlansUncheckedCreateWithoutPlanInput> | UserPlansCreateWithoutPlanInput[] | UserPlansUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserPlansCreateOrConnectWithoutPlanInput | UserPlansCreateOrConnectWithoutPlanInput[]
    createMany?: UserPlansCreateManyPlanInputEnvelope
    connect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
  }

  export type EnumRecurrentFieldUpdateOperationsInput = {
    set?: $Enums.Recurrent
  }

  export type OrganizationUpdateOneRequiredWithoutPlansNestedInput = {
    create?: XOR<OrganizationCreateWithoutPlansInput, OrganizationUncheckedCreateWithoutPlansInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPlansInput
    upsert?: OrganizationUpsertWithoutPlansInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPlansInput, OrganizationUpdateWithoutPlansInput>, OrganizationUncheckedUpdateWithoutPlansInput>
  }

  export type UserPlansUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserPlansCreateWithoutPlanInput, UserPlansUncheckedCreateWithoutPlanInput> | UserPlansCreateWithoutPlanInput[] | UserPlansUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserPlansCreateOrConnectWithoutPlanInput | UserPlansCreateOrConnectWithoutPlanInput[]
    upsert?: UserPlansUpsertWithWhereUniqueWithoutPlanInput | UserPlansUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserPlansCreateManyPlanInputEnvelope
    set?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    disconnect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    delete?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    connect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    update?: UserPlansUpdateWithWhereUniqueWithoutPlanInput | UserPlansUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserPlansUpdateManyWithWhereWithoutPlanInput | UserPlansUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserPlansScalarWhereInput | UserPlansScalarWhereInput[]
  }

  export type UserPlansUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserPlansCreateWithoutPlanInput, UserPlansUncheckedCreateWithoutPlanInput> | UserPlansCreateWithoutPlanInput[] | UserPlansUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserPlansCreateOrConnectWithoutPlanInput | UserPlansCreateOrConnectWithoutPlanInput[]
    upsert?: UserPlansUpsertWithWhereUniqueWithoutPlanInput | UserPlansUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserPlansCreateManyPlanInputEnvelope
    set?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    disconnect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    delete?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    connect?: UserPlansWhereUniqueInput | UserPlansWhereUniqueInput[]
    update?: UserPlansUpdateWithWhereUniqueWithoutPlanInput | UserPlansUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserPlansUpdateManyWithWhereWithoutPlanInput | UserPlansUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserPlansScalarWhereInput | UserPlansScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<ServiceCreateWithoutSchedulesInput, ServiceUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutSchedulesInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<OrganizationCreateWithoutSchedulesInput, OrganizationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSchedulesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EnumStatusSchedulesFieldUpdateOperationsInput = {
    set?: $Enums.StatusSchedules
  }

  export type ServiceUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<ServiceCreateWithoutSchedulesInput, ServiceUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutSchedulesInput
    upsert?: ServiceUpsertWithoutSchedulesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutSchedulesInput, ServiceUpdateWithoutSchedulesInput>, ServiceUncheckedUpdateWithoutSchedulesInput>
  }

  export type UserUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput
    upsert?: UserUpsertWithoutSchedulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSchedulesInput, UserUpdateWithoutSchedulesInput>, UserUncheckedUpdateWithoutSchedulesInput>
  }

  export type OrganizationUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<OrganizationCreateWithoutSchedulesInput, OrganizationUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSchedulesInput
    upsert?: OrganizationUpsertWithoutSchedulesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSchedulesInput, OrganizationUpdateWithoutSchedulesInput>, OrganizationUncheckedUpdateWithoutSchedulesInput>
  }

  export type ServiceCreateNestedOneWithoutPublicScheduleInput = {
    create?: XOR<ServiceCreateWithoutPublicScheduleInput, ServiceUncheckedCreateWithoutPublicScheduleInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPublicScheduleInput
    connect?: ServiceWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutPublicScheduleInput = {
    create?: XOR<OrganizationCreateWithoutPublicScheduleInput, OrganizationUncheckedCreateWithoutPublicScheduleInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPublicScheduleInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutPublicScheduleNestedInput = {
    create?: XOR<ServiceCreateWithoutPublicScheduleInput, ServiceUncheckedCreateWithoutPublicScheduleInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPublicScheduleInput
    upsert?: ServiceUpsertWithoutPublicScheduleInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutPublicScheduleInput, ServiceUpdateWithoutPublicScheduleInput>, ServiceUncheckedUpdateWithoutPublicScheduleInput>
  }

  export type OrganizationUpdateOneRequiredWithoutPublicScheduleNestedInput = {
    create?: XOR<OrganizationCreateWithoutPublicScheduleInput, OrganizationUncheckedCreateWithoutPublicScheduleInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPublicScheduleInput
    upsert?: OrganizationUpsertWithoutPublicScheduleInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPublicScheduleInput, OrganizationUpdateWithoutPublicScheduleInput>, OrganizationUncheckedUpdateWithoutPublicScheduleInput>
  }

  export type UserCreateNestedOneWithoutUserPlansInput = {
    create?: XOR<UserCreateWithoutUserPlansInput, UserUncheckedCreateWithoutUserPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPlansInput
    connect?: UserWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutUserPlansInput = {
    create?: XOR<PlanCreateWithoutUserPlansInput, PlanUncheckedCreateWithoutUserPlansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutUserPlansInput
    connect?: PlanWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserPlansNestedInput = {
    create?: XOR<UserCreateWithoutUserPlansInput, UserUncheckedCreateWithoutUserPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPlansInput
    upsert?: UserUpsertWithoutUserPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPlansInput, UserUpdateWithoutUserPlansInput>, UserUncheckedUpdateWithoutUserPlansInput>
  }

  export type PlanUpdateOneRequiredWithoutUserPlansNestedInput = {
    create?: XOR<PlanCreateWithoutUserPlansInput, PlanUncheckedCreateWithoutUserPlansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutUserPlansInput
    upsert?: PlanUpsertWithoutUserPlansInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutUserPlansInput, PlanUpdateWithoutUserPlansInput>, PlanUncheckedUpdateWithoutUserPlansInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRecurrentFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurrent | EnumRecurrentFieldRefInput<$PrismaModel>
    in?: $Enums.Recurrent[] | ListEnumRecurrentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurrent[] | ListEnumRecurrentFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrentFilter<$PrismaModel> | $Enums.Recurrent
  }

  export type NestedEnumRecurrentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Recurrent | EnumRecurrentFieldRefInput<$PrismaModel>
    in?: $Enums.Recurrent[] | ListEnumRecurrentFieldRefInput<$PrismaModel>
    notIn?: $Enums.Recurrent[] | ListEnumRecurrentFieldRefInput<$PrismaModel>
    not?: NestedEnumRecurrentWithAggregatesFilter<$PrismaModel> | $Enums.Recurrent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurrentFilter<$PrismaModel>
    _max?: NestedEnumRecurrentFilter<$PrismaModel>
  }

  export type NestedEnumStatusSchedulesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSchedules | EnumStatusSchedulesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSchedules[] | ListEnumStatusSchedulesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSchedules[] | ListEnumStatusSchedulesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSchedulesFilter<$PrismaModel> | $Enums.StatusSchedules
  }

  export type NestedEnumStatusSchedulesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSchedules | EnumStatusSchedulesFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSchedules[] | ListEnumStatusSchedulesFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSchedules[] | ListEnumStatusSchedulesFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSchedulesWithAggregatesFilter<$PrismaModel> | $Enums.StatusSchedules
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSchedulesFilter<$PrismaModel>
    _max?: NestedEnumStatusSchedulesFilter<$PrismaModel>
  }

  export type OrganizationCreateWithoutUserInput = {
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutOrganizationInput
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    schedules?: ScheduleCreateNestedManyWithoutOrganizationInput
    PublicSchedule?: PublicScheduleCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUserInput = {
    id?: number
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutOrganizationInput
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutOrganizationInput
    PublicSchedule?: PublicScheduleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUserInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUserInput, OrganizationUncheckedCreateWithoutUserInput>
  }

  export type ScheduleCreateWithoutUserInput = {
    uuid?: string
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
    service: ServiceCreateNestedOneWithoutSchedulesInput
    organization: OrganizationCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutUserInput = {
    id?: number
    uuid?: string
    serviceId: number
    organizationId: number
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type ScheduleCreateOrConnectWithoutUserInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput>
  }

  export type ScheduleCreateManyUserInputEnvelope = {
    data: ScheduleCreateManyUserInput | ScheduleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPlansCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutUserPlansInput
  }

  export type UserPlansUncheckedCreateWithoutUserInput = {
    id?: number
    planId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlansCreateOrConnectWithoutUserInput = {
    where: UserPlansWhereUniqueInput
    create: XOR<UserPlansCreateWithoutUserInput, UserPlansUncheckedCreateWithoutUserInput>
  }

  export type UserPlansCreateManyUserInputEnvelope = {
    data: UserPlansCreateManyUserInput | UserPlansCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutUserInput = {
    update: XOR<OrganizationUpdateWithoutUserInput, OrganizationUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationCreateWithoutUserInput, OrganizationUncheckedCreateWithoutUserInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUserInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUserInput, OrganizationUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    schedules?: ScheduleUpdateManyWithoutOrganizationNestedInput
    PublicSchedule?: PublicScheduleUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutOrganizationNestedInput
    PublicSchedule?: PublicScheduleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ScheduleUpsertWithWhereUniqueWithoutUserInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutUserInput, ScheduleUncheckedUpdateWithoutUserInput>
    create: XOR<ScheduleCreateWithoutUserInput, ScheduleUncheckedCreateWithoutUserInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutUserInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutUserInput, ScheduleUncheckedUpdateWithoutUserInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutUserInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutUserInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: IntFilter<"Schedule"> | number
    uuid?: UuidFilter<"Schedule"> | string
    serviceId?: IntFilter<"Schedule"> | number
    userId?: IntFilter<"Schedule"> | number
    organizationId?: IntFilter<"Schedule"> | number
    contractAt?: DateTimeFilter<"Schedule"> | Date | string
    status?: EnumStatusSchedulesFilter<"Schedule"> | $Enums.StatusSchedules
    rememberUser?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Schedule"> | Date | string | null
  }

  export type UserPlansUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPlansWhereUniqueInput
    update: XOR<UserPlansUpdateWithoutUserInput, UserPlansUncheckedUpdateWithoutUserInput>
    create: XOR<UserPlansCreateWithoutUserInput, UserPlansUncheckedCreateWithoutUserInput>
  }

  export type UserPlansUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPlansWhereUniqueInput
    data: XOR<UserPlansUpdateWithoutUserInput, UserPlansUncheckedUpdateWithoutUserInput>
  }

  export type UserPlansUpdateManyWithWhereWithoutUserInput = {
    where: UserPlansScalarWhereInput
    data: XOR<UserPlansUpdateManyMutationInput, UserPlansUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPlansScalarWhereInput = {
    AND?: UserPlansScalarWhereInput | UserPlansScalarWhereInput[]
    OR?: UserPlansScalarWhereInput[]
    NOT?: UserPlansScalarWhereInput | UserPlansScalarWhereInput[]
    id?: IntFilter<"UserPlans"> | number
    userId?: IntFilter<"UserPlans"> | number
    planId?: IntFilter<"UserPlans"> | number
    createdAt?: DateTimeFilter<"UserPlans"> | Date | string
    updatedAt?: DateTimeFilter<"UserPlans"> | Date | string
  }

  export type UserCreateWithoutOrganizationInput = {
    uuid?: string
    name: string
    email: string
    phone: string
    cpf: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleCreateNestedManyWithoutUserInput
    UserPlans?: UserPlansCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    phone: string
    cpf: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput
    UserPlans?: UserPlansUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type ServiceCreateWithoutOrganizationInput = {
    uuid?: string
    name: string
    price: number
    is_active?: boolean
    duration: string
    is_quantitative?: boolean
    limit_for_day?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleCreateNestedManyWithoutServiceInput
    PublicSchedule?: PublicScheduleCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutOrganizationInput = {
    id?: number
    uuid?: string
    name: string
    price: number
    is_active?: boolean
    duration: string
    is_quantitative?: boolean
    limit_for_day?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutServiceInput
    PublicSchedule?: PublicScheduleUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutOrganizationInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput>
  }

  export type ServiceCreateManyOrganizationInputEnvelope = {
    data: ServiceCreateManyOrganizationInput | ServiceCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type PlanCreateWithoutOrganizationInput = {
    uuid?: string
    name: string
    price: number
    recurrent: $Enums.Recurrent
    description: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserPlans?: UserPlansCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutOrganizationInput = {
    id?: number
    uuid?: string
    name: string
    price: number
    recurrent: $Enums.Recurrent
    description: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserPlans?: UserPlansUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutOrganizationInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput>
  }

  export type PlanCreateManyOrganizationInputEnvelope = {
    data: PlanCreateManyOrganizationInput | PlanCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutOrganizationInput = {
    uuid?: string
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
    service: ServiceCreateNestedOneWithoutSchedulesInput
    user: UserCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutOrganizationInput = {
    id?: number
    uuid?: string
    serviceId: number
    userId: number
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type ScheduleCreateOrConnectWithoutOrganizationInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutOrganizationInput, ScheduleUncheckedCreateWithoutOrganizationInput>
  }

  export type ScheduleCreateManyOrganizationInputEnvelope = {
    data: ScheduleCreateManyOrganizationInput | ScheduleCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type PublicScheduleCreateWithoutOrganizationInput = {
    contractAt: Date | string
    description: string
    status?: $Enums.StatusSchedules
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutPublicScheduleInput
  }

  export type PublicScheduleUncheckedCreateWithoutOrganizationInput = {
    id?: number
    serviceId: number
    contractAt: Date | string
    description: string
    status?: $Enums.StatusSchedules
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicScheduleCreateOrConnectWithoutOrganizationInput = {
    where: PublicScheduleWhereUniqueInput
    create: XOR<PublicScheduleCreateWithoutOrganizationInput, PublicScheduleUncheckedCreateWithoutOrganizationInput>
  }

  export type PublicScheduleCreateManyOrganizationInputEnvelope = {
    data: PublicScheduleCreateManyOrganizationInput | PublicScheduleCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrganizationInput = {
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUpdateManyWithoutUserNestedInput
    UserPlans?: UserPlansUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
    UserPlans?: UserPlansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServiceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutOrganizationInput, ServiceUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutOrganizationInput, ServiceUncheckedUpdateWithoutOrganizationInput>
  }

  export type ServiceUpdateManyWithWhereWithoutOrganizationInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: IntFilter<"Service"> | number
    uuid?: UuidFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    price?: IntFilter<"Service"> | number
    is_active?: BoolFilter<"Service"> | boolean
    duration?: StringFilter<"Service"> | string
    is_quantitative?: BoolFilter<"Service"> | boolean
    limit_for_day?: IntNullableFilter<"Service"> | number | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    organizationId?: IntFilter<"Service"> | number
  }

  export type PlanUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutOrganizationInput, PlanUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PlanCreateWithoutOrganizationInput, PlanUncheckedCreateWithoutOrganizationInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutOrganizationInput, PlanUncheckedUpdateWithoutOrganizationInput>
  }

  export type PlanUpdateManyWithWhereWithoutOrganizationInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PlanScalarWhereInput = {
    AND?: PlanScalarWhereInput | PlanScalarWhereInput[]
    OR?: PlanScalarWhereInput[]
    NOT?: PlanScalarWhereInput | PlanScalarWhereInput[]
    id?: IntFilter<"Plan"> | number
    uuid?: UuidFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    price?: IntFilter<"Plan"> | number
    recurrent?: EnumRecurrentFilter<"Plan"> | $Enums.Recurrent
    description?: StringFilter<"Plan"> | string
    dueDate?: DateTimeNullableFilter<"Plan"> | Date | string | null
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    organizationId?: IntFilter<"Plan"> | number
  }

  export type ScheduleUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutOrganizationInput, ScheduleUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ScheduleCreateWithoutOrganizationInput, ScheduleUncheckedCreateWithoutOrganizationInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutOrganizationInput, ScheduleUncheckedUpdateWithoutOrganizationInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutOrganizationInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PublicScheduleUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PublicScheduleWhereUniqueInput
    update: XOR<PublicScheduleUpdateWithoutOrganizationInput, PublicScheduleUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PublicScheduleCreateWithoutOrganizationInput, PublicScheduleUncheckedCreateWithoutOrganizationInput>
  }

  export type PublicScheduleUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PublicScheduleWhereUniqueInput
    data: XOR<PublicScheduleUpdateWithoutOrganizationInput, PublicScheduleUncheckedUpdateWithoutOrganizationInput>
  }

  export type PublicScheduleUpdateManyWithWhereWithoutOrganizationInput = {
    where: PublicScheduleScalarWhereInput
    data: XOR<PublicScheduleUpdateManyMutationInput, PublicScheduleUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PublicScheduleScalarWhereInput = {
    AND?: PublicScheduleScalarWhereInput | PublicScheduleScalarWhereInput[]
    OR?: PublicScheduleScalarWhereInput[]
    NOT?: PublicScheduleScalarWhereInput | PublicScheduleScalarWhereInput[]
    id?: IntFilter<"PublicSchedule"> | number
    serviceId?: IntFilter<"PublicSchedule"> | number
    contractAt?: DateTimeFilter<"PublicSchedule"> | Date | string
    description?: StringFilter<"PublicSchedule"> | string
    organizationId?: IntFilter<"PublicSchedule"> | number
    status?: EnumStatusSchedulesFilter<"PublicSchedule"> | $Enums.StatusSchedules
    createdAt?: DateTimeFilter<"PublicSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"PublicSchedule"> | Date | string
  }

  export type OrganizationCreateWithoutServicesInput = {
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    user: UserCreateNestedOneWithoutOrganizationInput
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    schedules?: ScheduleCreateNestedManyWithoutOrganizationInput
    PublicSchedule?: PublicScheduleCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutServicesInput = {
    id?: number
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    userId: number
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutOrganizationInput
    PublicSchedule?: PublicScheduleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutServicesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutServicesInput, OrganizationUncheckedCreateWithoutServicesInput>
  }

  export type ScheduleCreateWithoutServiceInput = {
    uuid?: string
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
    user: UserCreateNestedOneWithoutSchedulesInput
    organization: OrganizationCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutServiceInput = {
    id?: number
    uuid?: string
    userId: number
    organizationId: number
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type ScheduleCreateOrConnectWithoutServiceInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutServiceInput, ScheduleUncheckedCreateWithoutServiceInput>
  }

  export type ScheduleCreateManyServiceInputEnvelope = {
    data: ScheduleCreateManyServiceInput | ScheduleCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type PublicScheduleCreateWithoutServiceInput = {
    contractAt: Date | string
    description: string
    status?: $Enums.StatusSchedules
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPublicScheduleInput
  }

  export type PublicScheduleUncheckedCreateWithoutServiceInput = {
    id?: number
    contractAt: Date | string
    description: string
    organizationId: number
    status?: $Enums.StatusSchedules
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicScheduleCreateOrConnectWithoutServiceInput = {
    where: PublicScheduleWhereUniqueInput
    create: XOR<PublicScheduleCreateWithoutServiceInput, PublicScheduleUncheckedCreateWithoutServiceInput>
  }

  export type PublicScheduleCreateManyServiceInputEnvelope = {
    data: PublicScheduleCreateManyServiceInput | PublicScheduleCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutServicesInput = {
    update: XOR<OrganizationUpdateWithoutServicesInput, OrganizationUncheckedUpdateWithoutServicesInput>
    create: XOR<OrganizationCreateWithoutServicesInput, OrganizationUncheckedCreateWithoutServicesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutServicesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutServicesInput, OrganizationUncheckedUpdateWithoutServicesInput>
  }

  export type OrganizationUpdateWithoutServicesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutOrganizationNestedInput
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    schedules?: ScheduleUpdateManyWithoutOrganizationNestedInput
    PublicSchedule?: PublicScheduleUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutOrganizationNestedInput
    PublicSchedule?: PublicScheduleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ScheduleUpsertWithWhereUniqueWithoutServiceInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutServiceInput, ScheduleUncheckedUpdateWithoutServiceInput>
    create: XOR<ScheduleCreateWithoutServiceInput, ScheduleUncheckedCreateWithoutServiceInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutServiceInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutServiceInput, ScheduleUncheckedUpdateWithoutServiceInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutServiceInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutServiceInput>
  }

  export type PublicScheduleUpsertWithWhereUniqueWithoutServiceInput = {
    where: PublicScheduleWhereUniqueInput
    update: XOR<PublicScheduleUpdateWithoutServiceInput, PublicScheduleUncheckedUpdateWithoutServiceInput>
    create: XOR<PublicScheduleCreateWithoutServiceInput, PublicScheduleUncheckedCreateWithoutServiceInput>
  }

  export type PublicScheduleUpdateWithWhereUniqueWithoutServiceInput = {
    where: PublicScheduleWhereUniqueInput
    data: XOR<PublicScheduleUpdateWithoutServiceInput, PublicScheduleUncheckedUpdateWithoutServiceInput>
  }

  export type PublicScheduleUpdateManyWithWhereWithoutServiceInput = {
    where: PublicScheduleScalarWhereInput
    data: XOR<PublicScheduleUpdateManyMutationInput, PublicScheduleUncheckedUpdateManyWithoutServiceInput>
  }

  export type OrganizationCreateWithoutPlansInput = {
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    user: UserCreateNestedOneWithoutOrganizationInput
    services?: ServiceCreateNestedManyWithoutOrganizationInput
    schedules?: ScheduleCreateNestedManyWithoutOrganizationInput
    PublicSchedule?: PublicScheduleCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutPlansInput = {
    id?: number
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    userId: number
    services?: ServiceUncheckedCreateNestedManyWithoutOrganizationInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutOrganizationInput
    PublicSchedule?: PublicScheduleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutPlansInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPlansInput, OrganizationUncheckedCreateWithoutPlansInput>
  }

  export type UserPlansCreateWithoutPlanInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserPlansInput
  }

  export type UserPlansUncheckedCreateWithoutPlanInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlansCreateOrConnectWithoutPlanInput = {
    where: UserPlansWhereUniqueInput
    create: XOR<UserPlansCreateWithoutPlanInput, UserPlansUncheckedCreateWithoutPlanInput>
  }

  export type UserPlansCreateManyPlanInputEnvelope = {
    data: UserPlansCreateManyPlanInput | UserPlansCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutPlansInput = {
    update: XOR<OrganizationUpdateWithoutPlansInput, OrganizationUncheckedUpdateWithoutPlansInput>
    create: XOR<OrganizationCreateWithoutPlansInput, OrganizationUncheckedCreateWithoutPlansInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPlansInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPlansInput, OrganizationUncheckedUpdateWithoutPlansInput>
  }

  export type OrganizationUpdateWithoutPlansInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutOrganizationNestedInput
    services?: ServiceUpdateManyWithoutOrganizationNestedInput
    schedules?: ScheduleUpdateManyWithoutOrganizationNestedInput
    PublicSchedule?: PublicScheduleUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    services?: ServiceUncheckedUpdateManyWithoutOrganizationNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutOrganizationNestedInput
    PublicSchedule?: PublicScheduleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserPlansUpsertWithWhereUniqueWithoutPlanInput = {
    where: UserPlansWhereUniqueInput
    update: XOR<UserPlansUpdateWithoutPlanInput, UserPlansUncheckedUpdateWithoutPlanInput>
    create: XOR<UserPlansCreateWithoutPlanInput, UserPlansUncheckedCreateWithoutPlanInput>
  }

  export type UserPlansUpdateWithWhereUniqueWithoutPlanInput = {
    where: UserPlansWhereUniqueInput
    data: XOR<UserPlansUpdateWithoutPlanInput, UserPlansUncheckedUpdateWithoutPlanInput>
  }

  export type UserPlansUpdateManyWithWhereWithoutPlanInput = {
    where: UserPlansScalarWhereInput
    data: XOR<UserPlansUpdateManyMutationInput, UserPlansUncheckedUpdateManyWithoutPlanInput>
  }

  export type ServiceCreateWithoutSchedulesInput = {
    uuid?: string
    name: string
    price: number
    is_active?: boolean
    duration: string
    is_quantitative?: boolean
    limit_for_day?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutServicesInput
    PublicSchedule?: PublicScheduleCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutSchedulesInput = {
    id?: number
    uuid?: string
    name: string
    price: number
    is_active?: boolean
    duration: string
    is_quantitative?: boolean
    limit_for_day?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
    PublicSchedule?: PublicScheduleUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutSchedulesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutSchedulesInput, ServiceUncheckedCreateWithoutSchedulesInput>
  }

  export type UserCreateWithoutSchedulesInput = {
    uuid?: string
    name: string
    email: string
    phone: string
    cpf: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization?: OrganizationCreateNestedOneWithoutUserInput
    UserPlans?: UserPlansCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSchedulesInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    phone: string
    cpf: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization?: OrganizationUncheckedCreateNestedOneWithoutUserInput
    UserPlans?: UserPlansUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSchedulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
  }

  export type OrganizationCreateWithoutSchedulesInput = {
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    user: UserCreateNestedOneWithoutOrganizationInput
    services?: ServiceCreateNestedManyWithoutOrganizationInput
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    PublicSchedule?: PublicScheduleCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSchedulesInput = {
    id?: number
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    userId: number
    services?: ServiceUncheckedCreateNestedManyWithoutOrganizationInput
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    PublicSchedule?: PublicScheduleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSchedulesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSchedulesInput, OrganizationUncheckedCreateWithoutSchedulesInput>
  }

  export type ServiceUpsertWithoutSchedulesInput = {
    update: XOR<ServiceUpdateWithoutSchedulesInput, ServiceUncheckedUpdateWithoutSchedulesInput>
    create: XOR<ServiceCreateWithoutSchedulesInput, ServiceUncheckedCreateWithoutSchedulesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutSchedulesInput, ServiceUncheckedUpdateWithoutSchedulesInput>
  }

  export type ServiceUpdateWithoutSchedulesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    duration?: StringFieldUpdateOperationsInput | string
    is_quantitative?: BoolFieldUpdateOperationsInput | boolean
    limit_for_day?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutServicesNestedInput
    PublicSchedule?: PublicScheduleUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    duration?: StringFieldUpdateOperationsInput | string
    is_quantitative?: BoolFieldUpdateOperationsInput | boolean
    limit_for_day?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
    PublicSchedule?: PublicScheduleUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserUpsertWithoutSchedulesInput = {
    update: XOR<UserUpdateWithoutSchedulesInput, UserUncheckedUpdateWithoutSchedulesInput>
    create: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSchedulesInput, UserUncheckedUpdateWithoutSchedulesInput>
  }

  export type UserUpdateWithoutSchedulesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUpdateOneWithoutUserNestedInput
    UserPlans?: UserPlansUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUncheckedUpdateOneWithoutUserNestedInput
    UserPlans?: UserPlansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationUpsertWithoutSchedulesInput = {
    update: XOR<OrganizationUpdateWithoutSchedulesInput, OrganizationUncheckedUpdateWithoutSchedulesInput>
    create: XOR<OrganizationCreateWithoutSchedulesInput, OrganizationUncheckedCreateWithoutSchedulesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSchedulesInput, OrganizationUncheckedUpdateWithoutSchedulesInput>
  }

  export type OrganizationUpdateWithoutSchedulesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutOrganizationNestedInput
    services?: ServiceUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    PublicSchedule?: PublicScheduleUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    services?: ServiceUncheckedUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    PublicSchedule?: PublicScheduleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type ServiceCreateWithoutPublicScheduleInput = {
    uuid?: string
    name: string
    price: number
    is_active?: boolean
    duration: string
    is_quantitative?: boolean
    limit_for_day?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutServicesInput
    schedules?: ScheduleCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutPublicScheduleInput = {
    id?: number
    uuid?: string
    name: string
    price: number
    is_active?: boolean
    duration: string
    is_quantitative?: boolean
    limit_for_day?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
    schedules?: ScheduleUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutPublicScheduleInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutPublicScheduleInput, ServiceUncheckedCreateWithoutPublicScheduleInput>
  }

  export type OrganizationCreateWithoutPublicScheduleInput = {
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    user: UserCreateNestedOneWithoutOrganizationInput
    services?: ServiceCreateNestedManyWithoutOrganizationInput
    plans?: PlanCreateNestedManyWithoutOrganizationInput
    schedules?: ScheduleCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutPublicScheduleInput = {
    id?: number
    uuid?: string
    social_name: string
    fantasy_name: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    office: string
    image_path?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inactiveAt?: Date | string | null
    userId: number
    services?: ServiceUncheckedCreateNestedManyWithoutOrganizationInput
    plans?: PlanUncheckedCreateNestedManyWithoutOrganizationInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutPublicScheduleInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPublicScheduleInput, OrganizationUncheckedCreateWithoutPublicScheduleInput>
  }

  export type ServiceUpsertWithoutPublicScheduleInput = {
    update: XOR<ServiceUpdateWithoutPublicScheduleInput, ServiceUncheckedUpdateWithoutPublicScheduleInput>
    create: XOR<ServiceCreateWithoutPublicScheduleInput, ServiceUncheckedCreateWithoutPublicScheduleInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutPublicScheduleInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutPublicScheduleInput, ServiceUncheckedUpdateWithoutPublicScheduleInput>
  }

  export type ServiceUpdateWithoutPublicScheduleInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    duration?: StringFieldUpdateOperationsInput | string
    is_quantitative?: BoolFieldUpdateOperationsInput | boolean
    limit_for_day?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutServicesNestedInput
    schedules?: ScheduleUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutPublicScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    duration?: StringFieldUpdateOperationsInput | string
    is_quantitative?: BoolFieldUpdateOperationsInput | boolean
    limit_for_day?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
    schedules?: ScheduleUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type OrganizationUpsertWithoutPublicScheduleInput = {
    update: XOR<OrganizationUpdateWithoutPublicScheduleInput, OrganizationUncheckedUpdateWithoutPublicScheduleInput>
    create: XOR<OrganizationCreateWithoutPublicScheduleInput, OrganizationUncheckedCreateWithoutPublicScheduleInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPublicScheduleInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPublicScheduleInput, OrganizationUncheckedUpdateWithoutPublicScheduleInput>
  }

  export type OrganizationUpdateWithoutPublicScheduleInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutOrganizationNestedInput
    services?: ServiceUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUpdateManyWithoutOrganizationNestedInput
    schedules?: ScheduleUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPublicScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    social_name?: StringFieldUpdateOperationsInput | string
    fantasy_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    office?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inactiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    services?: ServiceUncheckedUpdateManyWithoutOrganizationNestedInput
    plans?: PlanUncheckedUpdateManyWithoutOrganizationNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateWithoutUserPlansInput = {
    uuid?: string
    name: string
    email: string
    phone: string
    cpf: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization?: OrganizationCreateNestedOneWithoutUserInput
    schedules?: ScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPlansInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    phone: string
    cpf: string
    role?: $Enums.Role
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization?: OrganizationUncheckedCreateNestedOneWithoutUserInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPlansInput, UserUncheckedCreateWithoutUserPlansInput>
  }

  export type PlanCreateWithoutUserPlansInput = {
    uuid?: string
    name: string
    price: number
    recurrent: $Enums.Recurrent
    description: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPlansInput
  }

  export type PlanUncheckedCreateWithoutUserPlansInput = {
    id?: number
    uuid?: string
    name: string
    price: number
    recurrent: $Enums.Recurrent
    description: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId: number
  }

  export type PlanCreateOrConnectWithoutUserPlansInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutUserPlansInput, PlanUncheckedCreateWithoutUserPlansInput>
  }

  export type UserUpsertWithoutUserPlansInput = {
    update: XOR<UserUpdateWithoutUserPlansInput, UserUncheckedUpdateWithoutUserPlansInput>
    create: XOR<UserCreateWithoutUserPlansInput, UserUncheckedCreateWithoutUserPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPlansInput, UserUncheckedUpdateWithoutUserPlansInput>
  }

  export type UserUpdateWithoutUserPlansInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUpdateOneWithoutUserNestedInput
    schedules?: ScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUncheckedUpdateOneWithoutUserNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlanUpsertWithoutUserPlansInput = {
    update: XOR<PlanUpdateWithoutUserPlansInput, PlanUncheckedUpdateWithoutUserPlansInput>
    create: XOR<PlanCreateWithoutUserPlansInput, PlanUncheckedCreateWithoutUserPlansInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutUserPlansInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutUserPlansInput, PlanUncheckedUpdateWithoutUserPlansInput>
  }

  export type PlanUpdateWithoutUserPlansInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    recurrent?: EnumRecurrentFieldUpdateOperationsInput | $Enums.Recurrent
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPlansNestedInput
  }

  export type PlanUncheckedUpdateWithoutUserPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    recurrent?: EnumRecurrentFieldUpdateOperationsInput | $Enums.Recurrent
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateManyUserInput = {
    id?: number
    uuid?: string
    serviceId: number
    organizationId: number
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type UserPlansCreateManyUserInput = {
    id?: number
    planId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service?: ServiceUpdateOneRequiredWithoutSchedulesNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPlansUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutUserPlansNestedInput
  }

  export type UserPlansUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlansUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    planId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyOrganizationInput = {
    id?: number
    uuid?: string
    name: string
    price: number
    is_active?: boolean
    duration: string
    is_quantitative?: boolean
    limit_for_day?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanCreateManyOrganizationInput = {
    id?: number
    uuid?: string
    name: string
    price: number
    recurrent: $Enums.Recurrent
    description: string
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateManyOrganizationInput = {
    id?: number
    uuid?: string
    serviceId: number
    userId: number
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type PublicScheduleCreateManyOrganizationInput = {
    id?: number
    serviceId: number
    contractAt: Date | string
    description: string
    status?: $Enums.StatusSchedules
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    duration?: StringFieldUpdateOperationsInput | string
    is_quantitative?: BoolFieldUpdateOperationsInput | boolean
    limit_for_day?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUpdateManyWithoutServiceNestedInput
    PublicSchedule?: PublicScheduleUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    duration?: StringFieldUpdateOperationsInput | string
    is_quantitative?: BoolFieldUpdateOperationsInput | boolean
    limit_for_day?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ScheduleUncheckedUpdateManyWithoutServiceNestedInput
    PublicSchedule?: PublicScheduleUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    duration?: StringFieldUpdateOperationsInput | string
    is_quantitative?: BoolFieldUpdateOperationsInput | boolean
    limit_for_day?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    recurrent?: EnumRecurrentFieldUpdateOperationsInput | $Enums.Recurrent
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPlans?: UserPlansUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    recurrent?: EnumRecurrentFieldUpdateOperationsInput | $Enums.Recurrent
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPlans?: UserPlansUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    recurrent?: EnumRecurrentFieldUpdateOperationsInput | $Enums.Recurrent
    description?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service?: ServiceUpdateOneRequiredWithoutSchedulesNestedInput
    user?: UserUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduleUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicScheduleUpdateWithoutOrganizationInput = {
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutPublicScheduleNestedInput
  }

  export type PublicScheduleUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicScheduleUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyServiceInput = {
    id?: number
    uuid?: string
    userId: number
    organizationId: number
    contractAt: Date | string
    status?: $Enums.StatusSchedules
    rememberUser: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type PublicScheduleCreateManyServiceInput = {
    id?: number
    contractAt: Date | string
    description: string
    organizationId: number
    status?: $Enums.StatusSchedules
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateWithoutServiceInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSchedulesNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduleUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    rememberUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicScheduleUpdateWithoutServiceInput = {
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPublicScheduleNestedInput
  }

  export type PublicScheduleUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicScheduleUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    contractAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusSchedulesFieldUpdateOperationsInput | $Enums.StatusSchedules
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlansCreateManyPlanInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlansUpdateWithoutPlanInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPlansNestedInput
  }

  export type UserPlansUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlansUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}