<script lang="ts">
    import { onMount } from 'svelte';
    import { usdToTry, euroToTry, gbpToTry, chfToTry, jpyToTry, cadToTry, audToTry, btcToTry, ethToTry, bnbToTry, adaToTry, xrpToTry, solToTry, dogeToTry, dotToTry, shibToTry, ltcToTry, maticToTry, avaxToTry, manaToTry, sandToTry, usdtToTry, busdToTry, linkToTry, uniToTry, atomToTry, algoToTry, ftmToTry, nearToTry, pepeToTry, aptToTry, opToTry, arbToTry, injToTry, suiToTry, stxToTry, galaToTry } from "$lib/convert";

    let result: string = "0";
    let amount: string = "1";
    let loading = false;
    let refreshing = false;
    let selectedCurrency: string = 'usd';

    const currencies = [
        { id: 'usd', name: 'USD/TRY', icon: '💵', convert: usdToTry },
        { id: 'eur', name: 'EUR/TRY', icon: '💶', convert: euroToTry },
        { id: 'gbp', name: 'GBP/TRY', icon: '🇬🇧', convert: gbpToTry },
        { id: 'chf', name: 'CHF/TRY', icon: '🇨🇭', convert: chfToTry },
        { id: 'jpy', name: 'JPY/TRY', icon: '🇯🇵', convert: jpyToTry },
        { id: 'cad', name: 'CAD/TRY', icon: '🇨🇦', convert: cadToTry },
        { id: 'aud', name: 'AUD/TRY', icon: '🇦🇺', convert: audToTry },
        { id: 'btc', name: 'BTC/TRY', icon: '₿', convert: btcToTry },
        { id: 'eth', name: 'ETH/TRY', icon: 'Ξ', convert: ethToTry },
        { id: 'bnb', name: 'BNB/TRY', icon: '🟡', convert: bnbToTry },
        { id: 'ada', name: 'ADA/TRY', icon: '⟠', convert: adaToTry },
        { id: 'sol', name: 'SOL/TRY', icon: '◎', convert: solToTry },
        { id: 'dot', name: 'DOT/TRY', icon: '●', convert: dotToTry },
        { id: 'ftm', name: 'FTM/TRY', icon: '👻', convert: ftmToTry },
        { id: 'near', name: 'NEAR/TRY', icon: '🌌', convert: nearToTry },
        { id: 'matic', name: 'MATIC/TRY', icon: '⬡', convert: maticToTry },
        { id: 'avax', name: 'AVAX/TRY', icon: '🔺', convert: avaxToTry },
        { id: 'mana', name: 'MANA/TRY', icon: '🎮', convert: manaToTry },
        { id: 'sand', name: 'SAND/TRY', icon: '⏳', convert: sandToTry },
        { id: 'usdt', name: 'USDT/TRY', icon: '💵', convert: usdtToTry },
        { id: 'busd', name: 'BUSD/TRY', icon: '💰', convert: busdToTry },
        { id: 'link', name: 'LINK/TRY', icon: '🔗', convert: linkToTry },
        { id: 'uni', name: 'UNI/TRY', icon: '🦄', convert: uniToTry },
        { id: 'atom', name: 'ATOM/TRY', icon: '⚛️', convert: atomToTry },
        { id: 'algo', name: 'ALGO/TRY', icon: '🔷', convert: algoToTry },
        { id: 'doge', name: 'DOGE/TRY', icon: '🐕', convert: dogeToTry },
        { id: 'shib', name: 'SHIB/TRY', icon: '🐕', convert: shibToTry },
        { id: 'xrp', name: 'XRP/TRY', icon: '✕', convert: xrpToTry },
        { id: 'ltc', name: 'LTC/TRY', icon: 'Ł', convert: ltcToTry },
        { id: 'pepe', name: 'PEPE/TRY', icon: '🐸', convert: pepeToTry },
        { id: 'apt', name: 'APT/TRY', icon: '🔵', convert: aptToTry },
        { id: 'op', name: 'OP/TRY', icon: '🔴', convert: opToTry },
        { id: 'arb', name: 'ARB/TRY', icon: '🔷', convert: arbToTry },
        { id: 'inj', name: 'INJ/TRY', icon: '💉', convert: injToTry },
        { id: 'sui', name: 'SUI/TRY', icon: '🌊', convert: suiToTry },
        { id: 'stx', name: 'STX/TRY', icon: '📚', convert: stxToTry },
        { id: 'gala', name: 'GALA/TRY', icon: '🎮', convert: galaToTry }
    ];

    async function convertCurrency(currency: typeof currencies[0], isRefresh = false) {
        if (!isRefresh && loading) return;
        
        try {
            if (!isRefresh) loading = true;
            refreshing = isRefresh;
            selectedCurrency = currency.id;
            
            const value = await currency.convert();
            const amountNum = parseFloat(amount) || 1;
            const calculatedValue = parseFloat(value) * amountNum;
            
            result = calculatedValue.toLocaleString('tr-TR', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 8 
            });
        } catch (error) {
            console.error(`Error converting ${currency.name}:`, error);
            result = "Error occurred";
        } finally {
            loading = false;
            refreshing = false;
        }
    }

    function handleAmountInput(event: Event) {
        const input = event.target as HTMLInputElement;
        amount = input.value.replace(/[^\d.]/g, '');
        
        if (selectedCurrency) {
            const currency = currencies.find(c => c.id === selectedCurrency);
            if (currency) convertCurrency(currency);
        }
    }

    onMount(() => {
        const usdCurrency = currencies.find(c => c.id === 'usd');
        if (usdCurrency) convertCurrency(usdCurrency);

        const interval = setInterval(() => {
            if (selectedCurrency) {
                const currency = currencies.find(c => c.id === selectedCurrency);
                if (currency) convertCurrency(currency, true);
            }
        }, 5000);
        return () => clearInterval(interval);
    });
</script>

<div class="flex items-center justify-center py-8 px-4 md:py-16">
    <div class="w-full max-w-7xl mx-auto">
        <div class="text-center mb-6">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Contch Exchange</h1>
            <p class="text-lg md:text-xl opacity-50">Real-time currency conversion to Turkish Lira</p>
        </div>

        <div class="max-w-4xl mx-auto">
            <div class="mb-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
                <div class="relative w-full sm:w-32 max-w-[200px]">
                    <input type="text" value={amount} on:input={handleAmountInput} class="w-full pl-4 pr-12 py-2 sm:py-2.5 bg-cWhiteGray rounded-lg border border-transparent focus:border-white/10 outline-none text-center placeholder:opacity-50 {amount ? '' : 'placeholder-shown:text-left'}" placeholder="Amount" />
                    {#if selectedCurrency}
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 text-sm">{currencies.find(c => c.id === selectedCurrency)?.id.toUpperCase()}</span>
                    {/if}
                </div>
                <select 
                    bind:value={selectedCurrency}
                    on:change={(e) => {
                        const currency = currencies.find(c => c.id === e.target.value);
                        if (currency) convertCurrency(currency);
                    }}
                    class="w-full sm:w-48 px-4 py-2 sm:py-2.5 bg-cWhiteGray rounded-lg border border-transparent focus:border-white/10 outline-none text-center disabled:opacity-50 disabled:cursor-not-allowed max-w-[200px] sm:max-w-none"
                    disabled={loading}
                >
                    {#each currencies as currency}
                    <option value={currency.id}>{currency.icon} {currency.name}</option>
                    {/each}
                </select>
            </div>
            
            {#if result !== "0"}
            <div class="mt-6 md:mt-8 p-4 md:p-6 bg-cWhiteGray border border-white/5 rounded-lg text-center">
                <p class="text-sm md:text-base mb-2 opacity-50">{amount} {selectedCurrency?.toUpperCase()} equals</p>
                <p class="text-2xl md:text-3xl lg:text-4xl font-bold">
                {#if loading && !refreshing}
                <span class="animate-pulse">Loading...</span>
                {:else}
                ₺{result}
                {/if}
                </p>
                <p class="text-[10px] md:text-xs mt-2 opacity-50">Auto-refreshes every 5 seconds</p>
            </div>
            {/if}
        </div>
    </div>
</div>