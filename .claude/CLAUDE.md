# Claude Code Instructions

## Browser Automation

Use `agent-browser` for web automation. Run `agent-browser --help` for all commands.

### Core workflow:
1. `agent-browser open <url>` - Navigate to page
2. `agent-browser snapshot -i` - Get interactive elements with refs (@e1, @e2)
3. `agent-browser click @e1` / `fill @e2 "text"` - Interact using refs
4. Re-snapshot after page change

### Common commands:
- `agent-browser open http://localhost:3000` - Open local dev server
- `agent-browser snapshot -i -c` - Get interactive elements (compact view)
- `agent-browser click @e1` - Click element by reference
- `agent-browser fill @e2 "text"` - Fill input field
- `agent-browser type @e3 "text"` - Type into element
- `agent-browser select @e4 value` - **Select option in combobox/dropdown (use this for select elements, NOT click)**
- `agent-browser screenshot` - Take screenshot
- `agent-browser get text @e1` - Get element text
- `agent-browser wait 1000` - Wait 1 second
- `agent-browser close` - Close browser

**IMPORTANT:** For HTML select elements (shown as "combobox" in snapshots), always use the `select` command, NOT `click` or `type`. Using `click` or `type` on select/option elements will cause OS error 35 (EAGAIN).

### Testing workflow example:
```bash
# Open application
agent-browser open http://localhost:3000

# Get interactive elements
agent-browser snapshot -i -c

# Click button by reference
agent-browser click @e1

# Wait for modal to appear
agent-browser wait 500

# Fill form fields
agent-browser fill @e3 "Player Name"
agent-browser select @e4 "option-value"  # For select/combobox elements
agent-browser click @e5

# Take screenshot
agent-browser screenshot result.png

# Close browser
agent-browser close
```

### Session management:
Use `--session <name>` to create isolated browser sessions:
```bash
agent-browser --session test1 open http://localhost:3000
agent-browser --session test2 open http://localhost:3000
```

### Debug mode:
Use `--headed` to see the browser window:
```bash
agent-browser --headed open http://localhost:3000
```
