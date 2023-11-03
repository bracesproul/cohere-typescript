/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import * as Cohere from "./api";
import * as serializers from "./serialization";
import urlJoin from "url-join";
import * as errors from "./errors";
import { Stream } from "core/streaming-fetcher/StreamingFetcher";

export declare namespace CohereClient {
    interface Options {
        environment?: core.Supplier<environments.CohereEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class CohereClient {
    constructor(protected readonly _options: CohereClient.Options) {}

    /**
     * This endpoint generates realistic text conditioned on a given input.
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.InternalServerError}
     */
    public async generate(
        request: Cohere.GenerateRequest,
        requestOptions?: CohereClient.RequestOptions
    ): Promise<Cohere.Generation> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "v1/generate"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.0.0",
            },
            contentType: "application/json",
            body: await serializers.GenerateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.Generation.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Cohere.BadRequestError(_response.error.body);
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                default:
                    throw new errors.CohereError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CohereError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CohereTimeoutError();
            case "unknown":
                throw new errors.CohereError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint returns text embeddings. An embedding is a list of floating point numbers that captures semantic information about the text that it represents.
     *
     * Embeddings can be used to create text classifiers as well as empower semantic search. To learn more about embeddings, see the embedding page.
     *
     * If you want to learn more how to use the embedding model, have a look at the [Semantic Search Guide](/docs/semantic-search).
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.InternalServerError}
     */
    public async embed(
        request: Cohere.EmbedRequest,
        requestOptions?: CohereClient.RequestOptions
    ): Promise<Cohere.EmbedResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "v1/embed"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.0.0",
            },
            contentType: "application/json",
            body: await serializers.EmbedRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.EmbedResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Cohere.BadRequestError(_response.error.body);
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                default:
                    throw new errors.CohereError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CohereError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CohereTimeoutError();
            case "unknown":
                throw new errors.CohereError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint makes a prediction about which label fits the specified text inputs best. To make a prediction, Classify uses the provided `examples` of text + label pairs as a reference.
     * Note: [Custom Models](/training-representation-models) trained on classification examples don't require the `examples` parameter to be passed in explicitly.
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.InternalServerError}
     */
    public async classify(
        request: Cohere.ClassifyRequest,
        requestOptions?: CohereClient.RequestOptions
    ): Promise<Cohere.ClassifyResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "v1/classify"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.0.0",
            },
            contentType: "application/json",
            body: await serializers.ClassifyRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.ClassifyResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Cohere.BadRequestError(_response.error.body);
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                default:
                    throw new errors.CohereError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CohereError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CohereTimeoutError();
            case "unknown":
                throw new errors.CohereError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * The `chat` endpoint allows users to have conversations with a Large Language Model (LLM) from Cohere. Users can send messages as part of a persisted conversation using the `conversation_id` parameter, or they can pass in their own conversation history using the `chat_history` parameter.
     * The endpoint features additional parameters such as `connectors` and `documents` that enable conversations enriched by external knowledge. We call this "Retrieval Augmented Generation", or "RAG".
     * If you have questions or require support, we're here to help! Reach out to your Cohere partner to enable access to this API.
     *
     */
    public async chat(
        request: Cohere.ChatRequest,
        requestOptions?: CohereClient.RequestOptions
    ): Promise<Cohere.NonStreamedChatResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "v1/chat"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.0.0",
            },
            contentType: "application/json",
            body: {
                ...(await serializers.ChatRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" })),
                stream: false,
            },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.NonStreamedChatResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CohereError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CohereError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CohereTimeoutError();
            case "unknown":
                throw new errors.CohereError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint splits input text into smaller units called tokens using byte-pair encoding (BPE). To learn more about tokenization and byte pair encoding, see the tokens page.
     * @throws {@link Cohere.BadRequestError}
     * @throws {@link Cohere.InternalServerError}
     */
    public async tokenize(
        request: Cohere.TokenizeRequest,
        requestOptions?: CohereClient.RequestOptions
    ): Promise<Cohere.TokenizeResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "v1/tokenize"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.0.0",
            },
            contentType: "application/json",
            body: await serializers.TokenizeRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.TokenizeResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Cohere.BadRequestError(_response.error.body);
                case 500:
                    throw new Cohere.InternalServerError(_response.error.body);
                default:
                    throw new errors.CohereError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CohereError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CohereTimeoutError();
            case "unknown":
                throw new errors.CohereError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint takes tokens using byte-pair encoding and returns their text representation. To learn more about tokenization and byte pair encoding, see the tokens page.
     */
    public async detokenize(
        request: Cohere.DetokenizeRequest,
        requestOptions?: CohereClient.RequestOptions
    ): Promise<Cohere.DetokenizeResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "v1/detokenize"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.0.0",
            },
            contentType: "application/json",
            body: await serializers.DetokenizeRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.DetokenizeResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CohereError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CohereError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CohereTimeoutError();
            case "unknown":
                throw new errors.CohereError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint identifies which language each of the provided texts is written in.
     */
    public async detectLanguage(
        request: Cohere.DetectLanguageRequest,
        requestOptions?: CohereClient.RequestOptions
    ): Promise<Cohere.DetectLanguageResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "v1/detect-language"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.0.0",
            },
            contentType: "application/json",
            body: await serializers.DetectLanguageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.DetectLanguageResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CohereError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CohereError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CohereTimeoutError();
            case "unknown":
                throw new errors.CohereError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint generates a summary in English for a given text.
     */
    public async summarize(
        request: Cohere.SummarizeRequest,
        requestOptions?: CohereClient.RequestOptions
    ): Promise<Cohere.SummarizeResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "v1/summarize"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.0.0",
            },
            contentType: "application/json",
            body: await serializers.SummarizeRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.SummarizeResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CohereError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CohereError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CohereTimeoutError();
            case "unknown":
                throw new errors.CohereError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint takes in a query and a list of texts and produces an ordered array with each text assigned a relevance score.
     */
    public async rerank(
        request: Cohere.RerankRequest,
        requestOptions?: CohereClient.RequestOptions
    ): Promise<Cohere.RerankResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "v1/rerank"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.0.0",
            },
            contentType: "application/json",
            body: await serializers.RerankRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.RerankResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CohereError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CohereError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CohereTimeoutError();
            case "unknown":
                throw new errors.CohereError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async chatStream(
        request: Cohere.ChatRequest,
        requestOptions?: CohereClient.RequestOptions
    ): Promise<Stream<Cohere.StreamedChatResponse>> {
        return await core.streamingFetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CohereEnvironment.Production,
                "v1/chat"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "cohere-ai",
                "X-Fern-SDK-Version": "7.0.0",
            },
            body: {
                ...(await serializers.ChatRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" })),
                stream: true,
            },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            parse: async (data) => {
                return await serializers.StreamedChatResponse.parseOrThrow(data, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            },
        });
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
