import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Button } from "../components/Button";

describe("Button", () => {
    test("should call onClick", async () => {
        const onClickMock = vi.fn();
        // 1. コンポーネントの描画
        render(<Button onClick={onClickMock}>ボタン</Button>);
        // 2. <button></button>を取得
        const button = screen.getByRole("button")
        // 3. <button></button>をクリック
        fireEvent.click(button);
        // 4. クリック時に引数に渡された関数が実行されているか確認する
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

});