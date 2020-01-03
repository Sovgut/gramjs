class Scanner {
    constructor(str) {
        this.str = str
        this.pos = 0
        this.lastMatch = null
    }

    get chr() {
        return this.str[this.pos]
    }

    peek(n = 1) {
        return this.str.slice(this.pos, this.pos + n)
    }

    reverse(n = 1) {
        const pos = this.pos - n
        return pos < 0 ? 0 : pos
    }

    consume(n = 1) {
        return this.str.slice(this.pos, this.pos += n)
    }

    scanUntil(re, consumeMatch = false) {
        const match = this.lastMatch = this.rest.match(re)
        if (!match) return null

        let len = match.index
        if (consumeMatch) len += match[0].size

        return this.consume(len)
    }

    get rest() {
        return this.str.slice(this.pos, this.str.length)
    }

    reset() {
        this.pos = 0
    }

    bof() {
        return this.pos <= 0
    }

    eof() {
        return this.pos >= this.str.length
    }
}

module.exports = Scanner
