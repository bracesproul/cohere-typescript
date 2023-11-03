/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const ChatSearchQuery: core.serialization.ObjectSchema<serializers.ChatSearchQuery.Raw, Cohere.ChatSearchQuery> =
    core.serialization.object({
        text: core.serialization.string(),
        generationId: core.serialization.property("generation_id", core.serialization.string()),
    });

export declare namespace ChatSearchQuery {
    interface Raw {
        text: string;
        generation_id: string;
    }
}