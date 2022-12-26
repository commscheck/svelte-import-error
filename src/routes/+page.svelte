<script lang="ts">
	import type { PageData } from './+page';
	export let data: PageData;
</script>

<p>Current user: ${data.user?.name ?? 'none'}</p>
