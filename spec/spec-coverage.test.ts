import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  spec?: string[];
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const markable = api.nodes.filter((node) => ["sessions", "assessments"].includes(node.type));

describe("spec coverage", () => {
  it("every Crossing and assessment declares its own checkable spec", () => {
    const missing = markable.filter((node) => !node.spec || node.spec.length === 0);
    expect(missing.map((node) => node.id), "nodes with an empty spec").toEqual([]);
  });
});
