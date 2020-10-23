import { map } from "rxjs/operators";
import { average } from "../../utils/stats";
import { Channel } from "../../types/channel";

/**
 * @method averageDeep
 * Averages list of values including deep lists, to a single value
 *
 * @returns {Observable} average
 */
export const averageDeep = () =>
  map(
    (channels: Channel) =>
      channels.reduce(
        (acc, value) =>
          acc + (Array.isArray(value) ? average(value) : value),
        0
      ) / channels.length
  );
