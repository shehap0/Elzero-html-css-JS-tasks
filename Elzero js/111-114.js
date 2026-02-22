// title for the page
    let title="tasks from 111 to 114"
    document.getElementById("title").textContent=title
    document.getElementById("heading").textContent=title

// task 1

document.addEventListener('DOMContentLoaded', function () {

    const fontSelect = document.getElementById('font-select');
    const colorSelect = document.getElementById('color-select');
    const sizeSelect = document.getElementById('size-select');

    const FONT_MAP = {
        'open-sans': '"Open Sans", sans-serif',
        'cairo': 'Cairo, sans-serif',
        'roboto': 'Roboto, sans-serif'
    };

    function applyAll(fontVal, colorVal, sizeVal) {
        if (fontVal) document.body.style.fontFamily = FONT_MAP[fontVal] || fontVal;
        if (colorVal) document.body.style.color = colorVal;
        if (sizeVal) document.body.style.fontSize = sizeVal + 'px';
    }

    function save() {
        localStorage.setItem('pageFont', fontSelect.value);
        localStorage.setItem('pageColor', colorSelect.value);
        localStorage.setItem('pageSize', sizeSelect.value);
    }

    fontSelect.addEventListener('change', function () {
        applyAll(fontSelect.value, null, null);
        save();
    });

    colorSelect.addEventListener('change', function () {
        applyAll(null, colorSelect.value, null);
        save();
    });

    sizeSelect.addEventListener('change', function () {
        applyAll(null, null, sizeSelect.value);
        save();
    });

    // Load saved settings or keep current defaults
    const savedFont = localStorage.getItem('pageFont') || fontSelect.value;
    const savedColor = localStorage.getItem('pageColor') || colorSelect.value;
    const savedSize = localStorage.getItem('pageSize') || sizeSelect.value;

    // Apply saved values to selects so UI matches state
    fontSelect.value = savedFont;
    colorSelect.value = savedColor;
    sizeSelect.value = savedSize;

    applyAll(savedFont, savedColor, savedSize);


    // task 2
    // --- Session form (cleared when tab/window is closed) ---
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const sessionSelect = document.getElementById('session-select');

    const SKEY = 'sessionFormValues';

    function saveSession() {
        const data = {
            input1: input1.value,
            input2: input2.value,
            input3: input3.value,
            select: sessionSelect.value
        };
        sessionStorage.setItem(SKEY, JSON.stringify(data));
    }

    function loadSession() {
        const raw = sessionStorage.getItem(SKEY);
        if (!raw) return;
        try {
            const data = JSON.parse(raw);
            if (data.input1 !== undefined) input1.value = data.input1;
            if (data.input2 !== undefined) input2.value = data.input2;
            if (data.input3 !== undefined) input3.value = data.input3;
            if (data.select !== undefined) sessionSelect.value = data.select;
        } catch (e) {
            console.error('Failed to parse session data', e);
        }
    }

    // Wire events to save on change/input
    if (input1) input1.addEventListener('input', saveSession);
    if (input2) input2.addEventListener('input', saveSession);
    if (input3) input3.addEventListener('input', saveSession);
    if (sessionSelect) sessionSelect.addEventListener('change', saveSession);

    // Load any saved session values (will be cleared when the tab/window is closed)
    loadSession();
});
