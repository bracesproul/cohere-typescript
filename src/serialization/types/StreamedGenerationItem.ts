/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const StreamedGenerationItem: core.serialization.Schema<
    serializers.StreamedGenerationItem.Raw,
    Cohere.StreamedGenerationItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).GenerationStream),
    core.serialization.lazyObject(async () => (await import("..")).GenerationFinalResponse),
]);

export declare namespace StreamedGenerationItem {
    type Raw = serializers.GenerationStream.Raw | serializers.GenerationFinalResponse.Raw;
}
