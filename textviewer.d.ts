/** A parser command */
type ParserCommand = {
    /** The function to use for substitution. */
    func: (args: string[]) => string
}

/** The set of parser commands. */
const textParserCommands: Record<string, ParserCommand>

/**
 * Substitutes the text in the input string based on the parser commands added by
 * {@link addParserCommand}
 *
 * @param text The text to do substitution on
 * @returns The resulting HTML
 */
function parseText(text: string): string

/**
 * Adds a command to {@link textParserCommands}
 * @param name The key to use
 * @param command The parser command
 */
function addParserCommand(name: string, command: ParserCommand): void
