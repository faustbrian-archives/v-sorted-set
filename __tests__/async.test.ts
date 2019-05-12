import { complianceTestsAsync } from "@veestore/test-suite";
import { StoreAsync } from "../src";

complianceTestsAsync(new StoreAsync<number>(), [...Array(5).keys()]);
