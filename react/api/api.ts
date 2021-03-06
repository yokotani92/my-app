// tslint:disable
/**
 * Hinatazaka API
 * 日向坂46を題材にしたサンプルAPI
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * ディスコグラフィー情報
 * @export
 * @interface Discography
 */
export interface Discography {
    /**
     * ID
     * @type {number}
     * @memberof Discography
     */
    id?: number;
    /**
     * タイトル
     * @type {string}
     * @memberof Discography
     */
    title: string;
    /**
     * 種別
     * @type {string}
     * @memberof Discography
     */
    type?: string;
    /**
     * センターのメンバーID
     * @type {number}
     * @memberof Discography
     */
    center_id?: number;
    /**
     * レコードの作成日時
     * @type {string}
     * @memberof Discography
     */
    created_at?: string;
}
/**
 * メンバー情報
 * @export
 * @interface Member
 */
export interface Member {
    /**
     * ID
     * @type {number}
     * @memberof Member
     */
    id?: number;
    /**
     * 名前
     * @type {string}
     * @memberof Member
     */
    name: string;
    /**
     * 年齢
     * @type {number}
     * @memberof Member
     */
    age?: number;
    /**
     * レコードの作成日時
     * @type {string}
     * @memberof Member
     */
    created_at?: string;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * OpenIDを使ってアプリケーションにサインインする
         * @summary サインイン
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuth: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/signin`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication my-app-key required


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * アプリケーションからサインアウトする
         * @summary サインアウト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthSignout: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/signout`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication my-app-key required


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * OpenID Providerからのリダイレクトを受けるエンドポイント
         * @summary OPからのリダイレクト先
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCallback: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/callback`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication my-app-key required


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * OpenIDを使ってアプリケーションにサインインする
         * @summary サインイン
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuth(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).getAuth(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * アプリケーションからサインアウトする
         * @summary サインアウト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthSignout(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).getAuthSignout(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * OpenID Providerからのリダイレクトを受けるエンドポイント
         * @summary OPからのリダイレクト先
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCallback(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await AuthApiAxiosParamCreator(configuration).getCallback(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * OpenIDを使ってアプリケーションにサインインする
         * @summary サインイン
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuth(options?: any): AxiosPromise<void> {
            return AuthApiFp(configuration).getAuth(options).then((request) => request(axios, basePath));
        },
        /**
         * アプリケーションからサインアウトする
         * @summary サインアウト
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthSignout(options?: any): AxiosPromise<void> {
            return AuthApiFp(configuration).getAuthSignout(options).then((request) => request(axios, basePath));
        },
        /**
         * OpenID Providerからのリダイレクトを受けるエンドポイント
         * @summary OPからのリダイレクト先
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCallback(options?: any): AxiosPromise<void> {
            return AuthApiFp(configuration).getCallback(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * OpenIDを使ってアプリケーションにサインインする
     * @summary サインイン
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public getAuth(options?: any) {
        return AuthApiFp(this.configuration).getAuth(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * アプリケーションからサインアウトする
     * @summary サインアウト
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public getAuthSignout(options?: any) {
        return AuthApiFp(this.configuration).getAuthSignout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * OpenID Providerからのリダイレクトを受けるエンドポイント
     * @summary OPからのリダイレクト先
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public getCallback(options?: any) {
        return AuthApiFp(this.configuration).getCallback(options).then((request) => request(this.axios, this.basePath));
    }

}


/**
 * HinatazakaApi - axios parameter creator
 * @export
 */
export const HinatazakaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * メンバーの情報を削除する
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMembersId: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteMembersId.');
            }
            const localVarPath = `/members/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication my-app-key required


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ディスコグラフィー情報を取得する
         * @summary ディスコグラフィー情報
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDiscographyId: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getDiscographyId.');
            }
            const localVarPath = `/discography/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication my-app-key required


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * メンバーの情報を取得する
         * @summary メンバー情報
         * @param {number} id ID of pet to fetch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberId: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getMemberId.');
            }
            const localVarPath = `/members/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication my-app-key required


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 全メンバーの情報を取得する
         * @summary 全メンバー情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMembers: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/members`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication my-app-key required


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 新しいメンバーを追加する
         * @param {Member} [member] 新しいメンバー情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMembers: async (member?: Member, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/members`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication my-app-key required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof member !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(member !== undefined ? member : {}) : (member || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * メンバーの情報を更新する
         * @param {string} id 
         * @param {Member} [member] 更新するメンバー情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putMembersId: async (id: string, member?: Member, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling putMembersId.');
            }
            const localVarPath = `/members/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication my-app-key required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof member !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(member !== undefined ? member : {}) : (member || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HinatazakaApi - functional programming interface
 * @export
 */
export const HinatazakaApiFp = function(configuration?: Configuration) {
    return {
        /**
         * メンバーの情報を削除する
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMembersId(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Member>> {
            const localVarAxiosArgs = await HinatazakaApiAxiosParamCreator(configuration).deleteMembersId(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * ディスコグラフィー情報を取得する
         * @summary ディスコグラフィー情報
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDiscographyId(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Discography>> {
            const localVarAxiosArgs = await HinatazakaApiAxiosParamCreator(configuration).getDiscographyId(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * メンバーの情報を取得する
         * @summary メンバー情報
         * @param {number} id ID of pet to fetch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMemberId(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Member>> {
            const localVarAxiosArgs = await HinatazakaApiAxiosParamCreator(configuration).getMemberId(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 全メンバーの情報を取得する
         * @summary 全メンバー情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMembers(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Member>>> {
            const localVarAxiosArgs = await HinatazakaApiAxiosParamCreator(configuration).getMembers(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 新しいメンバーを追加する
         * @param {Member} [member] 新しいメンバー情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postMembers(member?: Member, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Member>> {
            const localVarAxiosArgs = await HinatazakaApiAxiosParamCreator(configuration).postMembers(member, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * メンバーの情報を更新する
         * @param {string} id 
         * @param {Member} [member] 更新するメンバー情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putMembersId(id: string, member?: Member, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Member>> {
            const localVarAxiosArgs = await HinatazakaApiAxiosParamCreator(configuration).putMembersId(id, member, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * HinatazakaApi - factory interface
 * @export
 */
export const HinatazakaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * メンバーの情報を削除する
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMembersId(id: string, options?: any): AxiosPromise<Member> {
            return HinatazakaApiFp(configuration).deleteMembersId(id, options).then((request) => request(axios, basePath));
        },
        /**
         * ディスコグラフィー情報を取得する
         * @summary ディスコグラフィー情報
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDiscographyId(id: string, options?: any): AxiosPromise<Discography> {
            return HinatazakaApiFp(configuration).getDiscographyId(id, options).then((request) => request(axios, basePath));
        },
        /**
         * メンバーの情報を取得する
         * @summary メンバー情報
         * @param {number} id ID of pet to fetch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberId(id: number, options?: any): AxiosPromise<Member> {
            return HinatazakaApiFp(configuration).getMemberId(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 全メンバーの情報を取得する
         * @summary 全メンバー情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMembers(options?: any): AxiosPromise<Array<Member>> {
            return HinatazakaApiFp(configuration).getMembers(options).then((request) => request(axios, basePath));
        },
        /**
         * 新しいメンバーを追加する
         * @param {Member} [member] 新しいメンバー情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMembers(member?: Member, options?: any): AxiosPromise<Member> {
            return HinatazakaApiFp(configuration).postMembers(member, options).then((request) => request(axios, basePath));
        },
        /**
         * メンバーの情報を更新する
         * @param {string} id 
         * @param {Member} [member] 更新するメンバー情報
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putMembersId(id: string, member?: Member, options?: any): AxiosPromise<Member> {
            return HinatazakaApiFp(configuration).putMembersId(id, member, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HinatazakaApi - object-oriented interface
 * @export
 * @class HinatazakaApi
 * @extends {BaseAPI}
 */
export class HinatazakaApi extends BaseAPI {
    /**
     * メンバーの情報を削除する
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HinatazakaApi
     */
    public deleteMembersId(id: string, options?: any) {
        return HinatazakaApiFp(this.configuration).deleteMembersId(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ディスコグラフィー情報を取得する
     * @summary ディスコグラフィー情報
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HinatazakaApi
     */
    public getDiscographyId(id: string, options?: any) {
        return HinatazakaApiFp(this.configuration).getDiscographyId(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * メンバーの情報を取得する
     * @summary メンバー情報
     * @param {number} id ID of pet to fetch
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HinatazakaApi
     */
    public getMemberId(id: number, options?: any) {
        return HinatazakaApiFp(this.configuration).getMemberId(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 全メンバーの情報を取得する
     * @summary 全メンバー情報
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HinatazakaApi
     */
    public getMembers(options?: any) {
        return HinatazakaApiFp(this.configuration).getMembers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 新しいメンバーを追加する
     * @param {Member} [member] 新しいメンバー情報
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HinatazakaApi
     */
    public postMembers(member?: Member, options?: any) {
        return HinatazakaApiFp(this.configuration).postMembers(member, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * メンバーの情報を更新する
     * @param {string} id 
     * @param {Member} [member] 更新するメンバー情報
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HinatazakaApi
     */
    public putMembersId(id: string, member?: Member, options?: any) {
        return HinatazakaApiFp(this.configuration).putMembersId(id, member, options).then((request) => request(this.axios, this.basePath));
    }

}


