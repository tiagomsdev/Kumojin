import moment from "moment-timezone";
import MockDate from "mockdate";
import {getUserTimezone,getUserDateFromUtc} from "../momentTimeZone";

describe("getUserTimezone", () => {
    it("should return America/Sao Paulo for the local timezone", () => {
      moment.tz.guess = jest.fn().mockReturnValue("America/Sao_Paulo");
  
      const result = getUserTimezone();
  
      expect(result).toEqual("America/Sao_Paulo");
      expect(moment.tz.guess).toHaveBeenCalled();
    });
  });

  describe("getUserDateFromUtc", () => {
    beforeEach(() => {
      MockDate.set("2021-11-12T11:30:35Z");
    });
  
    it("should return the utc date in the Casablanca timezone", () => {
      const result = getUserDateFromUtc(new Date(),"Africa/Casablanca");
  
      expect(result).toEqual("Nov 12th 2021, 12:30 pm");
    });

    it("should return the utc date in the Tokio timezone", () => {
        const result = getUserDateFromUtc(new Date(),"Asia/Tokyo");
    
        expect(result).toEqual("Nov 12th 2021, 8:30 pm");
      });
  });
