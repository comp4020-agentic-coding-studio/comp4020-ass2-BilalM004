import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const sessions = api.nodes.filter((node) => node.type === "sessions");

describe("twelve-week schedule", () => {
  it("has exactly one session per week, 1 through 12", () => {
    const weeks = sessions.map((node) => Number(node.meta?.week)).sort((a, b) => a - b);
    expect(weeks).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("has Crit Participation name every week, once each", () => {
    const critParticipation = api.nodes.find(
      (node) => node.type === "assessments" && node.id.endsWith("crit-participation"),
    );
    expect(critParticipation, "expected an assessments/*crit-participation entry").toBeTruthy();

    const covered = ((critParticipation?.meta?.weeks as number[] | undefined) ?? []).slice().sort((a, b) => a - b);
    expect(covered).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });
});
